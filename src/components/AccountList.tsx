import AccountListItem from "./AccountListItem";
import {FlatList} from "react-native";
import {accountsCollection} from "../db";
import {withObservables} from "@nozbe/watermelondb/react";
import Account from "../model/Account";

function AccountList({accounts} : {accounts: Account[]}) {

  return (

    <FlatList
      data={accounts}
      contentContainerStyle={{ gap:5 }}
      renderItem={ ({item}) => <AccountListItem account={item}/> }
    />

  );


}

const enhance = withObservables([],() => ({
  accounts: accountsCollection.query(),
}));

const EnhancedAccountsList = enhance(AccountList);
export default EnhancedAccountsList;