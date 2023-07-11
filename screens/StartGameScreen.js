import React from "react";
import { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";


const StartGameScreen = ({ onStartGame }) => {
	const [enteredNumber, setEnteredNumber] = useState("");

	function numberInputHandler(inputText) {
		setEnteredNumber(inputText.replace(/[^0-9]/g, ""));
	}

	function resetInputHandler() {
		setEnteredNumber("");
	}

	function confirmInputHandler() {
		console.log("validating input");
		const chosenNumber = parseInt(enteredNumber);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			console.log("invalid input");
			Alert.alert(
				"Invalid Number!",
				"Number has to be a number between 1 and 99.",
				[
					{
						text: "Hmm",
						style: "destructive",
						onPress: resetInputHandler,
					},
				]
			);
		} else {
			console.log("valid input");
			// Alert.alert("Number Confirmed!", "You chose " + chosenNumber, [
			// 	{
			// 		text: "OK",
			// 		style: "destructive",
			// 		onPress: resetInputHandler,
			// 	},
			// ]);
			onStartGame(chosenNumber);
		}
	}
	return (
		<>
			<Title text={ "Enter a Number so we can Guess it!"} />
			<View className="p-4 bg-green-400 mt-10 shadow-2xl mx-8 rounded-xl shadow-black opacity-90">
				<TextInput
					style={{ fontFamily: "bariol" }}
					className="text-2xl rounded-lg border border-spacing-4 border-green-700 shadow-lg
                p-4 m-8 w-24 text-center self-center"
					maxLength={2}
					keyboardType="number-pad"
					autoCapitalize="none"
					autoCorrect={false}
					placeholder="00"
					value={enteredNumber}
					onChangeText={numberInputHandler}
				/>
				<View className="flex-row">
					<View className="flex-1">
						<PrimaryButton onPress={resetInputHandler}>
							Reset
						</PrimaryButton>
					</View>
					<View className="flex-1">
						<PrimaryButton onPress={confirmInputHandler}>
							Confirm
						</PrimaryButton>
					</View>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({});

export default StartGameScreen;
