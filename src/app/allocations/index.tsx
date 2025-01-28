import { StatusBar } from 'expo-status-bar';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Link, Stack} from "expo-router";
import AllocationsList from "../../components/AllocationsList";

export default function App() {
  return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Allocations' }}/>

        <Link href="/allocations/new" asChild>
            <Text style={styles.button}>New Allocation</Text>
        </Link>

        <AllocationsList />
        
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    margin: 10,
    padding: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
    overflow: 'hidden',
  },
});
