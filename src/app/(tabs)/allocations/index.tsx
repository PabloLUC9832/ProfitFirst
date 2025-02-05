import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Link, Stack} from "expo-router";
import AllocationsList from "../../../components/AllocationsList";
import Feather from '@expo/vector-icons/Feather';
import {mySync} from "../../../db/sync";

export default function HomeScreen() {

  return (
      <View style={styles.container}>
        <Stack.Screen
            options={{
              title: 'Allocations',
              headerRight: () => (
                <Feather name="refresh-cw" size={20} color="green" onPress={mySync} />
              )
            }}
        />

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
