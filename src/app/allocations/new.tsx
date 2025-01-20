import {Text,View} from "react-native";
import {Stack} from "expo-router";

export default function NewAllocationScreen() {

  return (
      <View>
        <Stack.Screen options={{ title: 'New Allocations' }}/>
        <Text>New Allocations</Text>
      </View>
  );

}