import {StyleSheet, Text, View} from 'react-native';
import Account from "../model/Account";
import {withObservables} from "@nozbe/watermelondb/react";
import AntDesign from '@expo/vector-icons/AntDesign';
import database from "../db";

type AccountListItem = {
  account: Account;
};

export default function AccountListItem( {account} : AccountListItem) {

  const onDelete = async () => {
    await database.write(async () => {
      await account.markAsDeleted();
    });

  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}> { account.name } </Text>
      <Text style={styles.percentage}> { account.cap }% </Text>
      <Text style={styles.percentage}> { account.tap }% </Text>
      <AntDesign name="delete" size={24} color="black" onPress={onDelete} />
    </View>
  );
};
//2:52:50
const enhance = withObservables(['account'],({account}) => ({
  account: account,
}));

export default enhance(AccountListItem);

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  percentage: {
    flex: 1,
  },

});