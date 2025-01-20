import { Stack, Tabs } from "expo-router";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name="signIn" options={{ headerShown: false }} />
                <Stack.Screen name="signUp" options={{ headerShown: false }} />
            </Stack>
            <StatusBar backgroundColor="#161622" style="light" />
        </>
    );
};

export default AuthLayout;
