import { View, Text, TextInput, StyleSheet } from "react-native";
import Logo from "../components/logo";
import { Button } from "react-native-elements";
import { ButtonGroup } from "@rneui/themed";
import SelectDropdown from "react-native-select-dropdown";
import { DatePickerInput } from "react-native-paper-dates";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function AddTarefa() {
  //as categorias possiveis pra tarefa (por padrao ta pessoal)
  const categoria = ["Pessoal", "Estudo", "Trabalho", "Outro"];

  //useState para escolher a prioridade da tarefa
  const [selectedIndex, setSelectedIndex] = useState([0, 2, 3]);

  //useState pra escolher a data
  const [inputData, setInputData] = useState(undefined);

  //useNavigation pra navegar
  const nav = useNavigation();

  return (
    <View style={style.newContainer}>
      <Button
        title="×"
        type="clear"
        buttonStyle={{
          height: 80,
        }}
        titleStyle={{
          color: "#989898",
          fontSize: 70,
        }}
        containerStyle={{
          position: "absolute",
          right: 10,
          top: 0,
        }}
        onPress={() => {
          nav.navigate("home");
        }}
      />
      <Logo />
      <View style={style.divider}></View>
      <View style={style.newContent}>
        <Text style={style.taskTitle}>Nova Tarefa</Text>
        <View style={style.inputArea}>
          <View>
            <Text style={style.inputText}>Título:</Text>
            <TextInput
              placeholder="e.g: Trabalho de Química"
              style={style.input}
            ></TextInput>
          </View>
          <View style={style.inputRow}>
            <Text style={style.inputTextData}>Data:</Text>
            <DatePickerInput
              locale="pt"
              label={""}
              value={inputData}
              onChange={(d) => setInputData(d)}
              mode="outlined"
              startYear={2024}
            />
          </View>
          <View>
            <Text style={style.inputText}>Descrição:</Text>
            <TextInput
              placeholder="e.g: lorem ipsum dolor"
              style={style.input}
            ></TextInput>
          </View>
          <View>
            <Text style={style.inputText}>Categoria:</Text>
            <SelectDropdown
              data={categoria}
              defaultButtonText="Escolha uma Categoria"
              defaultValue={"pessoal"}
              buttonStyle={style.buttonStyle}
              buttonTextStyle={style.buttonTextStyle}
              dropdownStyle={style.dropdownStyle}
              rowStyle={style.rowStyle}
              rowTextStyle={style.rowTextStyle}
              dropdownIconPosition="right"
            />
          </View>
          <View>
            <Text style={style.inputText}>Prioridade:</Text>
            <ButtonGroup
              buttons={["Baixa", "Média", "Alta"]}
              selectedIndex={selectedIndex}
              onPress={(value) => {
                setSelectedIndex(value);
              }}
              containerStyle={{
                alignItems: "center",
                justifyContent: `center`,
                width: `100%`,
                height: 50,
                marginStart: 0,
              }}
              selectedButtonStyle={{
                backgroundColor: "#A3B18A",
              }}
              buttonStyle={{}}
            />
          </View>
          <View>
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
                bottom: -10,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export const style = StyleSheet.create({
  newContainer: {
    backgroundColor: "#FFFFFF",
    height: `100%`,
  },
  closeBtn: {
    fontSize: 70,
    position: "absolute",
    right: 25,
    top: 25,
    color: "#9E9E9E",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
  },
  newContent: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  taskTitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#3A5A40",
    top: -10,
  },
  inputDate: {
    width: "90%",
    backgroundColor: null,
  },
  inputArea: {
    gap: 20,
    margin: 10,
    height: "100%",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginVertical: 1,
  },
  inputText: {
    fontSize: 25,
    color: "#444",
  },
  inputTextData: {
    fontSize: 25,
    color: "#444",
    width: "40%",
  },
  input: {
    width: "100%",
    height: 50,
    fontSize: 18,
    textAlign: "left",
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
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
  rowStyle: {
    //estilo das linhas do botao dropdown (dentro)
    backgroundColor: null,
  },
  rowTextStyle: {
    //estilo dos textos de dentro do botao dropdow
    backgroundColor: null,
  },
  dropdownStyle: {
    //estilo do botao dropdown (dentro)
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  buttonStyle: {
    //estilo do botao dropdown (fora)
    width: "100%",
    backgroundColor: null,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  buttonTextStyle: {
    // estilo do texto do botao dropdow (fora)
    color: "#686868",
    textAlign: "left",
  },
});
