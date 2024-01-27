import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logo from "../components/logo";
import { FAB, Icon } from "react-native-elements";

export default function Home({}) {
  return (
    <>
      <View>
        <Logo />
        <View style={styles.headerMenu}>
          <Pressable>
            <Text style={styles.menuText}>Tudo</Text>
          </Pressable>
          <View style={styles.menuOptions}>
            <Pressable>
              <Text style={styles.menuText2}>Baixa</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.menuText2}>Média</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.menuText2}>Alta</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.backgroundContainer}>
            <Text style={styles.backgroundText}>Parece que você ainda não adicionou nenhuma tarefa!</Text>
            <FAB
                style={styles.fab}
                title="Adicionar Tarefa"
                color="#A3B18A"
                icon={<Icon name="add" size={25} color="white" />}
                size="large"
            />
        </View>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerMenu: {
    flexDirection: "row",
    marginStart: 20,
  },
  menuOptions: {
    width: 100,
    flexDirection: "row",
    gap: 25,
  },
  menuText: {
    fontWeight: "bold",
    fontSize: 25,
    marginEnd: 90,
    backgroundColor: "#DAD7CD",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 100,
    marginBottom: 10,
  },
  menuText2: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#989898",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
  },
  backgroundContainer: {
    backgroundColor: "#EDEDED",
    width: "100%",
    minHeight: "100%",
  },
  backgroundText: {
    color: '#989898',
    alignSelf: 'center',
    textAlign: 'left',
    fontSize: 45,
    fontWeight: 'bold',
    padding: 25
  },
  fab: {
    position: 'absolute',
    alignSelf: 'center',
    marginVertical: 580
  }
});
