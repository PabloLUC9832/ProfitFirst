import {View, Text, StyleSheet} from "react-native";
import Allocation from "../model/Allocation";

const AllocationListItem = ({allocation}: {allocation: Allocation}) => {

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.date}>{allocation.createdAt?.toLocaleDateString()}</Text>
          <Text style={styles.income}>{allocation.income}</Text>
        </View>
      </View>
  );

};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'gainsboro',
    justifyContent: 'space-between',
    padding: 10,
  },
  income: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default AllocationListItem;