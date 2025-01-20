import { Link } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView className=" h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="w-full  items-center h-full px-4">
                    <Text className="text-[50px]">EZLoc</Text>
                    <Link href="signIn">connexion</Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });
