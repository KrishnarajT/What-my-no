import React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";

const PrimaryButton = (props) => {
	const pressHandler = () => {
		console.log("PrimaryButton pressed");
		props.onPress();
	};

	return (
		<View className="rounded-full m-1 text-white text-center overflow-hidden shadow-lg">
			<Pressable
				onPress={pressHandler}
				style={({ pressed }) => {
					if (pressed) {
						return [styles.pressed, styles.normal];
					}
					return styles.normal;
				}}
				android_ripple={{
					color: "rgba(21, 128, 61, 0.2)",
				}}
			>
				<Text
					className="text-white text-center text-xl"
					style={{ fontFamily: "bariol" }}
				>
					{props.children}
				</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	normal: {
		backgroundColor: "rgb(21, 128, 61)",
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 8,
	},

	pressed: {
		opacity: 0.75,
	},
});

export default PrimaryButton;
