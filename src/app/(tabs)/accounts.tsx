import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import AccountList from "../../components/AccountList";
import Entypo from '@expo/vector-icons/Entypo';
import {useState} from "react";
import database, {accountsCollection} from "../../db";
import Account from "../../model/Account";
import {useAuth} from "../../providers/AuthProvider";

export default function AccountsScreen() {

  const [name, setName] = useState("");
  const [cap, setCap] = useState("");
  const [tap, setTap] = useState("");

  const { user } = useAuth();

  const createAccount = async () => {

    await database.write(async () => {
      await accountsCollection.create((account: Account) => {
        account.name = name;
        account.cap = Number.parseInt(cap);
        account.tap = Number.parseInt(tap);
        account.userId = user?.id;
      });

    });
    setName("");
    setCap("");
    setTap("");
  }

  const onRead = async () => {
    //const accountsCollection = database.get('accounts');
    //const accounts = await accountsCollection.query().fetch();
    //console.log(accounts);
    await database.write(async () => {
      const accounts = await accountsCollection.query().fetch();
      const account = accounts[0];
      account.update((updatedAccount: Account) => {
        updatedAccount.name = '<333>';
      });
    });

  };

  return (
    <View style={{ gap:5, padding: 5 }}>

      <View style={styles.header}>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>

      <AccountList />

      <View style={styles.inputRow}>
        <TextInput value={name} onChangeText={setName} placeholder="Name" style={styles.input} />
        <TextInput value={cap} onChangeText={setCap} placeholder="CAP %" style={styles.input} />
        <TextInput value={tap} onChangeText={setTap} placeholder="TAP %" style={styles.input} />
        <Entypo name="check" size={20} color="green" />

      </View>

      <Button title="Add account" onPress={ createAccount }/>
      <Button title="TEST" onPress={ onRead }/>


    </View>
  );


}

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  input: {

  }


});