import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import * as SystemUI from "expo-system-ui";
SystemUI.setBackgroundColorAsync("#D3F4C1");

export default function App() {
	return (
		<View className="flex-1">
      <StatusBar style="auto" />
      <StartGameScreen />
    </View>
	);
}
