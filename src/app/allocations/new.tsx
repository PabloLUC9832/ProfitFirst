import {Text, StyleSheet, View, TextInput, Button} from "react-native";
import {router, Stack} from "expo-router";
import {useState} from "react";
import database, {accountAllocationCollection, accountsCollection, allocationsCollection} from "../../db";
import {withObservables} from "@nozbe/watermelondb/react";
import Account from "../../model/Account";
import Allocation from "../../model/Allocation";
import AccountAllocation from "../../model/AccountAllocation";

function NewAllocationScreen({ accounts } : { accounts: Account[] }) {

  const [income, setIncome] = useState('0');

  const save = async () => {

    await database.write(async () => {
      const allocation = await allocationsCollection.create((newAllocation) => {
        newAllocation.income = Number.parseFloat(income);
      });

      await Promise.all(
        accounts.map((account: Account) => {
          accountAllocationCollection.create((item: AccountAllocation) => {
            item.account.set(account);
            item.allocation.set(allocation);
            item.cap = account.cap;
            item.amount = (allocation.income * account.cap) / 100;
          });
        })
      );


    });

    //await Allocation.create(Number.parseFloat(income));
    setIncome('');
    router.back();

  };

  return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'New Allocations' }}/>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Income</Text>
          <TextInput
              value={income}
              onChangeText={setIncome}
              placeholder="$123"
              style={styles.input}
          />

        </View>


        {accounts.map(account => (
          <View key={account.id} style={styles.inputRow}>
            <Text style={{flex:1}}>{account.name} : {account.cap}%</Text>
            <Text>
              ${ (Number.parseFloat(income) * (account.cap ?? 0))/100 }
            </Text>
          </View>
        ))}

        <Button title="Save" onPress={save} />


      </View>
  );

}

const enhance = withObservables([],() => ({
  accounts: accountsCollection.query(),
}));

export default enhance(NewAllocationScreen);

const styles = StyleSheet.create({

  container: {
    padding: 10,
    gap: 10,
  },
  label: {
    fontWeight: "bold",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap:10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flex: 1,
  }

});