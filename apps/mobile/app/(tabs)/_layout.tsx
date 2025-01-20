import { Stack, Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function TabsLayout() {
    return (
        <>
            <Tabs>
                <Tabs.Screen name="home" />
            </Tabs>
        </>
    );
}
