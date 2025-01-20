import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaFrameContext, SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>SignIn</Text>
                <Link href="/signUp">Créer un compte</Link>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
