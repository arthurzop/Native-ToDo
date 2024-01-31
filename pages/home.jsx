import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Logo from "../components/logo";
import Menu from "../components/menuOp";
import CardTarefa from "../components/cards/tarefa";
import { Button, Icon } from "react-native-elements";

export default function Home({}) {
  const [openModal, setOpenModal] = useState(false);

  const nav = useNavigation()

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
              alignItems: "center",
            }}
            titleStyle={{
              fontSize: 20,
              fontWeight: "bold",
            }}
            containerStyle={{
              width: "50%",
              alignSelf: "center",
              position: "absolute",
              bottom: 440,
            }}
            onPress={() => setOpenModal(!openModal)}
          />
          <Modal
            animationType="slide"
            visible={openModal}
            transparent={true}
            onRequestClose={() => {
              setOpenModal(!openModal);
            }}
          >
            <View style={style.modalContainer}>
              <View style={style.modalContent}>
                <Text style={style.modalTitle}>Nova Tarefa</Text>
                <View style={style.inputArea}>
                  <View style={style.inputRow}>
                    <Text style={style.inputText}>Data:</Text>
                    <TextInput
                      placeholder="dd/mm/aaaa"
                      style={style.inputDate}
                    ></TextInput>
                  </View>
                  <View>
                    <Text style={style.inputText}>Título:</Text>
                    <TextInput
                      placeholder="e.g: Trabalho de Química"
                      style={style.input}
                    ></TextInput>
                  </View>
                  <View>
                    <Text style={style.inputText}>Prioridade:</Text>
                    <View style={style.btnRow}>
                      {/* <TouchableWithoutFeedback onPress={handlePress} onPressOut={handleUnPress}>
                        <Pressable  style={[style.inputButton1, inputButton1]}>
                          <Text style={style.btnText1}>Baixa</Text>
                        </Pressable >
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback style={style.inputButton2}>
                        <Text style={style.btnText2}>Média</Text>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback style={style.inputButton3}>
                        <Text style={style.btnText3}>Alta</Text>
                      </TouchableWithoutFeedback> */}
                      <Button
                        title={"Baixa"}
                        buttonStyle={{
                          backgroundColor: "#BDFFA6CC",
                          height: 45,
                          borderRadius: 50,
                          alignItems: "center",
                          borderWidth: 1,
                          borderColor: "#2EB93C",
                        }}
                        titleStyle={{
                          fontSize: 20,

                          paddingHorizontal: 10,
                          color: "#2EB93C",
                        }}
                      />
                      <Button
                        title={"Média"}
                        buttonStyle={{
                          backgroundColor: "#FFF1AACC",
                          height: 45,
                          borderRadius: 50,
                          alignItems: "center",
                          borderWidth: 1,
                          borderColor: "#FFC500",
                        }}
                        titleStyle={{
                          fontSize: 20,

                          paddingHorizontal: 8,
                          color: "#FFC500",
                        }}
                      />
                      <Button
                        title={"Alta"}
                        buttonStyle={{
                          backgroundColor: "#FFBBBBCC",
                          height: 45,
                          borderRadius: 50,
                          alignItems: "center",
                          borderWidth: 1,
                          borderColor: "#E05A5A",
                        }}
                        titleStyle={{
                          fontSize: 20,

                          paddingHorizontal: 14,
                          color: "#E05A5A",
                        }}
                      />
                    </View>
                  </View>
                  <View style={style.btnContainer}>
                    <Button
                      title="Adicionar"
                      buttonStyle={{
                        backgroundColor: "#A3B18A",
                        height: 60,
                        borderRadius: 50,
                      }}
                      titleStyle={{
                        fontSize: 30,
                        fontWeight: "bold",
                      }}
                      containerStyle={{
                        width: "60%",
                        alignSelf: "center",
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={style.btnFecharContainer}>
              <Pressable onPress={() => setOpenModal(!openModal)}>
                <Image
                  source={require("../assets/images/btn-close.png")}
                  style={style.btnFechar}
                />
              </Pressable>
            </View>
          </Modal>
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
  modalContainer: {
    marginVertical: 50,
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    paddingVertical: 30,
    alignItems: "center",
    height: 550,
    elevation: 480,
  },
  modalContent: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalTitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#3A5A40",
  },
  inputArea: {
    gap: 30,
    margin: 10,
    height: "100%",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginVertical: 20,
  },
  inputText: {
    fontSize: 25,
    color: "#686868",
  },
  input: {
    width: "100%",
    height: 50,
    fontSize: 18,
    textAlign: "left",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  inputDate: {
    fontSize: 15,
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  btnFecharContainer: {
    width: "100%",
    alignItems: "center",
    elevation: 400,
  },
  btnFechar: {
    resizeMode: "contain",
    width: 70,
    height: 70,
  },
});
