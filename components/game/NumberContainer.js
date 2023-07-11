import React from "react";
import { View, StyleSheet, Text } from "react-native";

const NumberContainer = ({ currentGuess }) => {
	return (
		<View className="flex justify-center align-middle items-center">
			<View className="p-4 pb-0 bg-green-200 m-4 w-fit max-w-fit border border-green-900 shadow-xl shadow-black my-8">
				<Text
					className="text-5xl text-green-900 pb-0 p-4 self-center text-center shadow-md"
					style={{ fontFamily: "bariol" }}
				>
					{currentGuess}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default NumberContainer;
