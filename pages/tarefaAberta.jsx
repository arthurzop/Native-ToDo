import { StyleSheet, Text, View, Image, Pressable, TextInput } from "react-native";
import { DatePickerInput } from "react-native-paper-dates";
import { useState } from "react";
import Logo from "../components/logo";
import SelectDropdown from "react-native-select-dropdown";
import { Button } from "react-native-elements";


export default function TarefaAberta() {

    const [inputData, setInputData] = useState(inputData);

    const categoria = ["Pessoal", "Estudo", "Trabalho", "Outro"]


    return (
        <View>
            <Logo />
            <View style={style.divider} />
            <View style={style.taskContainer}>
                <Pressable style={style.taskRow}>
                    <TextInput style={style.taskName}>Nome da Tarefa</TextInput>
                    <Image source={require('../assets/images/edit-icon.png')} style={style.taskImage} />
                </Pressable>
                <View style={style.taskRow}>
                    <Text style={style.taskText}>Data:</Text>
                    <DatePickerInput
                        locale="pt"
                        label={''}
                        value={inputData}
                        onChange={(d) => setInputData(d)}
                        mode="outlined"
                        startYear={2024}
                    />
                </View>
                <View>
                    <Text style={style.taskText}>Descrição:</Text>
                    <TextInput style={style.taskInput}
                        placeholder="aaaaa"
                    />
                </View>
                <View>
                    <Text style={style.taskText}>Categoria:</Text>
                    <SelectDropdown
                        data={categoria}
                        defaultButtonText='Escolha uma Categoria'
                        defaultValue={'pessoal'}
                        buttonStyle={style.buttonStyle}
                        buttonTextStyle={style.buttonTextStyle}
                        dropdownStyle={style.dropdownStyle}
                        rowStyle={style.rowStyle}
                        rowTextStyle={style.rowTextStyle}
                    />
                </View>
                <View>
                    <Text style={style.taskText}>Prioridade:</Text>
                    <View style={style.btnRow}>
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
                <View style={style.btnRow}>
                    <Pressable>
                        <Image source={require('../assets/images/delete-button.png')}/> 
                    </Pressable>
                    <Pressable>
                        <Image source={require('../assets/images/save-button.png')}/> 
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({

})