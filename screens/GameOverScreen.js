import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = (props) => {
	console.log(props);
	return (
		<View className="flex flex-1 flex-col justify-start align-middle">
			<Title text={"Game Over!"} />
			<View className="border-4 self-center m-8 border-green-900 rounded-full h-64 w-64">
				<Image
					className="rounded-full h-full w-full overflow-hidden bg-cover self-center"
					source={require("../assets/images/zhuo-cheng-you-2WE_V_dh0B0-unsplash.jpg")}
				/>
			</View>
			<Text className="text-xl text-center self-center p-4 m-4">
				Your Phone needed{" "}
				<Text className="text-green-800 font-bold">{props.rounds}</Text>{" "}
				guesses to correctly find your Entered Number {" "}
				<Text className="text-green-800 font-bold">
					{props.userChoice}
				</Text>
			</Text>
			<View className="flex flex-row self-center">
				<PrimaryButton onPress={props.onRestart}>
					Play Again!
				</PrimaryButton>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default GameOverScreen;
