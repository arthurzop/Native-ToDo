import { StyleSheet, Text, View, Image, Pressable, TextInput } from "react-native";
import Logo from "../components/logo";

export default function TarefaAberta() {
    return(
        <View>
            <Logo/>
            <View style={style.divider}/>
            <View style={style.taskContainer}>
                <TextInput>Nome da Tarefa</TextInput>
                <Image/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    divider: {
        height: 1,
        width: "100%",
        backgroundColor: "#ccc",
    },
})