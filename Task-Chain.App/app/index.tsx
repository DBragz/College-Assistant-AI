import { useState } from "react";
import {
	Keyboard,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	useColorScheme,
	View,
} from "react-native";
import { StyleSheet } from "react-native";

export default function Index() {
	const theme = useColorScheme();
	const [stringValueFromSmartContract, setStringValueFromSmartContract] =
		useState("");

	const styles = StyleSheet.create({
		text: {
			color: theme === "dark" ? "white" : "black",
			fontSize: 20,
		},
		container: {
			backgroundColor: theme === "dark" ? "black" : "white",
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		},
		input: {
			padding: 10,
			margin: 10,
			width: "80%",
			color: theme === "dark" ? "white" : "black",
			backgroundColor: theme === "dark" ? "gray" : "white",
		},
	});

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.container}>
				<Text style={styles.text}>Hello Task Chain Team!</Text>
				<TextInput
					style={styles.input}
					placeholder="Enter your name"
					value={stringValueFromSmartContract}
					onChangeText={setStringValueFromSmartContract}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}
