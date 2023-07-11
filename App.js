import { StatusBar } from "expo-status-bar";
import {
	Button,
	StyleSheet,
	Text,
	View,
	ImageBackground,
	SafeAreaView,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import * as SystemUI from "expo-system-ui";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./constants/colors";
import { useEffect, useCallback } from "react";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameOver, setGameOver] = useState(false);
	const [guessRounds, setguessRounds] = useState(0);

	const [fontsLoaded] = Font.useFonts({
		bariol: require("./assets/fonts/Bariol_Serif_Regular.otf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	let screen = <StartGameScreen onStartGame={startGameHandler} />;

	const restartGameHandler = () => {
		setUserNumber(null);
		setGameOver(false);
		setguessRounds(0);
		screen = <StartGameScreen onStartGame={startGameHandler} />;
	};

	if (userNumber) {
		screen = (
			<GameScreen
				userChoice={userNumber}
				setGameOver={setGameOver}
				setRounds={setguessRounds}
			/>
		);
	}

	if (gameOver) {
		screen = (
			<GameOverScreen
				userChoice={userNumber}
				onRestart={restartGameHandler}
				rounds={guessRounds}
			/>
		);
	}

	return (
		<LinearGradient
			colors={[Colors.background, Colors.primary]}
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
					opacity: 0.1,
				}}
			>
				<StatusBar style="auto" />

				<SafeAreaView style={{ flex: 1 }}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}
