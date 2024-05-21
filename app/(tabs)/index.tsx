import { StyleSheet, Text, View} from "react-native"
import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";

export default function RootLayout() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Andromeda</Text>
      <StatusBar style="auto"></StatusBar>
      <Link href="/profile" style={{ color: "blue" }}>Go to profile</Link>
    </View>
  );
}