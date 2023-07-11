import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Title = (props) => {
	return (
		<View className="w-full min-w-full bg-green-100 border-y-4 border-green-800 mt-16 opacity-80">
			<Text
				className="text-3xl text-black self-center text-center p-4 m-4 shadow-inner
          shadow-black"
				style={{ fontFamily: "bariol" }}
			>
				{props.text}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Title;
