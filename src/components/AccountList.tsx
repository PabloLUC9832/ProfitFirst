import AccountListItem from "./AccountListItem";
import {FlatList} from "react-native";

export default function AccountList() {

  return (

    <FlatList
      data={[1,2,3]}
      contentContainerStyle={{ gap:5 }}
      renderItem={() => <AccountListItem />}
    />

  );


}