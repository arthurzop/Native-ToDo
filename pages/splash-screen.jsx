import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";

export default function Splash() {
  const [fontsLoaded, fontError] = useFonts({
    "DM Sans": require("../assets/fonts/DMSans-VariableFont_opsz,wght.ttf"),
    "DM Sans Italic": require("../assets/fonts/DMSans-Italic-VariableFont_opsz,wght.ttf"),
  });
  return (
    <>
      <View style={styles.background}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Image source={require("../assets/images/check.png")} />
            <Image source={require("../assets/images/check.png")} />
          </View>
          <View style={styles.logo2}>
            <Text style={styles.text1}>Organiza</Text>
            <Text style={styles.text2}>to-do</Text>
          </View>
        </View>
        <Text style={styles.descricao}>
          O aplicativo para organizar suas atividades, deveres e tarefas.
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Vamos Lá! </Text>
            <Image source={require("../assets/images/seta.png")} />
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#3A5A40",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    marginTop: 100,
    flexDirection: "row",
    gap: 5,
  },
  text1: {
    fontSize: 60,
    color: "#FFF",
    paddingTop: 8,
  },
  text2: {
    fontSize: 60,
    color: "#FFF",
    paddingTop: 10,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  descricao: {
    width: "60%",
    textAlign: 'center',
    fontSize: 35,
    color: '#fff'
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "rgba(208, 208, 208, 0.2)",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 80,
  },
});
