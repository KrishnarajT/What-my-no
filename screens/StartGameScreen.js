import React from "react";
import { View, StyleSheet, TextInput, Pressable } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
	return (
		<View className="p-4 bg-green-400 mt-10 shadow-2xl mx-8 rounded-xl shadow-black opacity-90">
			<TextInput
				className="text-2xl rounded-lg border border-spacing-4 border-green-700 shadow-lg
                p-4 m-8 w-24 text-center self-center"
				maxLength={2}
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="00"
			/>
			<View className="flex-row">
				<View className="flex-1">
					<PrimaryButton>Start Game</PrimaryButton>
				</View>
				<View className="flex-1">
					<PrimaryButton>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default StartGameScreen;
