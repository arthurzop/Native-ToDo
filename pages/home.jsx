import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logo from "../components/logo";
import Menu from "../components/menuOp";
import CardTarefa from "../components/cards/tarefa";
import { Button, Icon } from "react-native-elements";

export default function Home({}) {
  return (
    <>
      <View>
        <Logo />
        <Menu />
        <View style={style.divider} />
        <View style={style.backgroundContainer}>
          {/* <Text style={style.backgroundText}>Parece que você ainda não adicionou nenhuma tarefa!</Text> */}
          <CardTarefa />
          <CardTarefa />
          <CardTarefa />
          <CardTarefa />
          <CardTarefa />
          <Button
            title="Adicionar Tarefa"
            icon={<Icon name="add" size={25} color="#FFF" />}
            buttonStyle={{
              backgroundColor: "#A3B18A",
              height: 50,
              borderRadius: 100,
              alignItems: 'center'
            }}
            titleStyle={{
              fontSize: 20,
              fontWeight: 'bold'
            }}
            containerStyle={{
              width: "50%",
              alignSelf: "center",
              position: "absolute",
              bottom: 440,
              
            }}
          />
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
  },
  backgroundContainer: {
    backgroundColor: "#EDEDED",
    width: "100%",
    minHeight: "100%",
    paddingVertical: 10,
  },
  backgroundText: {
    color: "#989898",
    alignSelf: "center",
    textAlign: "left",
    fontSize: 45,
    fontWeight: "bold",
    padding: 25,
  },
});
