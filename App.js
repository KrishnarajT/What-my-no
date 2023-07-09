import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import * as SystemUI from "expo-system-ui";
import { LinearGradient } from "expo-linear-gradient";
SystemUI.setBackgroundColorAsync("#D3F4C1");

export default function App() {
	return (
		<LinearGradient
			colors={["#fff", "#D3F4C1"]}
			style={{
				flex: 1,
			}}
			locations={[0.0, 0.3]}
		>
			<ImageBackground
				source={require("./assets/images/mingwei-lim-LNn3LI2rSVQ-unsplash.jpg")}
				style={{
					flex: 1,
          resizeMode: "cover",
          overflow: "hidden",
					justifyContent: "flex-start",
				}}
				imageStyle={{
					opacity: 0.3,
				}}
			>
				<StatusBar style="auto" />
				<View className="w-full min-w-full bg-green-100 border-y-4 border-green-800 mt-16 opacity-80">
					<Text
						className="text-3xl text-black self-center text-center p-4 m-4 shadow-inner
          shadow-black"
					>
						Enter a Number so we can Guess it!
					</Text>
				</View>
				<StartGameScreen />
			</ImageBackground>
		</LinearGradient>
	);
}
