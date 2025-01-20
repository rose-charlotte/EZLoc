import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../components/FormField";
import { useState } from "react";

const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>SignIn</Text>
                <FormField
                    title="Email"
                    value={form.email}
                    handleChangeText={(e: string) => setForm({ ...form, email: e })}
                    // keybordType: "email-adress"
                />
                <FormField
                    title="Password"
                    value={form.password}
                    handleChangeText={(e: string) => setForm({ ...form, password: e })}
                />
                <Link href="/signUp">Créer un compte</Link>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
