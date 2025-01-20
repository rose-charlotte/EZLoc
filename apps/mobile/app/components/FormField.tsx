import { View, Text, TextInput } from "react-native";

export default function FormField(props: FormFieldProps) {
    return (
        <View className={` space-y-2 ${props.otherStyles}`}>
            <Text>{props.title}</Text>
            <View className="">
                <TextInput placeholder={props.title} />
            </View>
        </View>
    );
}

export interface FormFieldProps {
    title: string;
    value: string;
    handleChangeText: (text: string) => void;
    otherStyles?: string;
}
