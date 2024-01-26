import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from "../components/logo";

export default function Home ({}) {
    return(
        <>
        <View>
            <Logo/>
            <Text>
                Home Page
            </Text>
        </View>
        </>
    )
}