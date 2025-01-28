import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
	const [loaded] = useFonts({
		Inter: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={theme}>
			<Stack>
				<Stack.Screen name="index" options={{ title: "Home" }} />
				<Stack.Screen name="+not-found" options={{ title: "Not Found" }} />
			</Stack>
		</ThemeProvider>
	);
}
