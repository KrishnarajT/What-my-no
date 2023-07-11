import React from "react";
import { View, StyleSheet, Text, Alert, FlatList } from "react-native";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";

function generateRandomNumber(min, max, exclude) {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		return generateRandomNumber(min, max, exclude);
	} else {
		return rndNum;
	}
}

const GameScreen = (props) => {
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomNumber(1, 100, props.userChoice)
	);
	const [roundLogs, setroundLogs] = useState([currentGuess]);

	const [minBoundary, setMinBoundary] = useState(1);
	const [maxBoundary, setMaxBoundary] = useState(100);

	useEffect(() => {
		if (currentGuess === props.userChoice) {
			props.setGameOver(true);
		}
	}, [currentGuess, props.userChoice, props.onGameOver]);

	useEffect(() => {
		setMinBoundary(1);
		setMaxBoundary(100);
		// setCurrentGuess(generateRandomNumber(1, 100, props.userChoice));
	}, []);

	function nextGuessHandler(direction) {
		if (
			(direction === "lower" && currentGuess < props.userChoice) ||
			(direction === "higher" && currentGuess > props.userChoice)
		) {
			Alert.alert("Don't lie!", "You know that this is wrong...", [
				{ text: "Yeah Finee!", style: "cancel" },
			]);
			return;
		}
		let newRandomNumber;
		if (direction === "lower") {
			setMaxBoundary(currentGuess);
			newRandomNumber = generateRandomNumber(
				minBoundary,
				currentGuess,
				currentGuess
			);
			setCurrentGuess(newRandomNumber);
		} else {
			setMinBoundary(currentGuess + 1);
			newRandomNumber = generateRandomNumber(
				currentGuess,
				maxBoundary,
				currentGuess
			);
			setCurrentGuess(newRandomNumber);
		}
		// increase the number of rounds
		props.setRounds((curRounds) => curRounds + 1);
		setroundLogs((curLogs) => [newRandomNumber, ...curLogs]);
	}

	return (
		<>
			<Title text={"Computer's Guess"} />
			{/* Guess */}
			<NumberContainer currentGuess={currentGuess} />

			<View className="p-4 bg-green-400 shadow-2xl mx-8 rounded-xl shadow-black opacity-90">
				<Text
					style={{ fontFamily: "bariol" }}
					className="text-3xl text-black self-center text-center p-4 m-4 shadow-inner
          shadow-black"
				>
					Is your Number Higher or Lower?
				</Text>
				<View className="flex-row">
					<View className="flex-1">
						<PrimaryButton
							onPress={nextGuessHandler.bind(this, "higher")}
						>
							<Ionicons name="md-add" size={24} />
						</PrimaryButton>
					</View>
					<View className="flex-1">
						<PrimaryButton
							onPress={nextGuessHandler.bind(this, "lower")}
						>
							<Ionicons name="md-remove" size={24} />
						</PrimaryButton>
					</View>
				</View>
			</View>
			<Text className="text-3xl text-center m-4 text-green-900">
				Guesses
			</Text>
			<FlatList
				data={roundLogs}
				keyExtractor={(item) => item.toString()}
				className="px-4 pb-4"
				renderItem={(itemData) => (
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}
						className="p-2 m-2 bg-slate-200 shadow-sm border mx-2 rounded-full shadow-black opacity-90"
					>
						<Text
							style={{
								fontFamily: "bariol",
								textAlign: "center",
								fontSize: 20,
							}}
						>
							#{roundLogs.length - itemData.index}
						</Text>
						
						<Text
							style={{
								fontFamily: "bariol",
								textAlign: "center",
								fontSize: 20,
							}}
							className="px-2"
						>
							Computer Guessed {itemData.item}
						</Text>
					</View>
				)}
			/>
		</>
	);
};

const styles = StyleSheet.create({});

export default GameScreen;
