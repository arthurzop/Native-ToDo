import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import lostTask from "../../assets/images/lost-task.png"

export default function CardTarefa() {
    return(
        <View style={style.cardContainer}>
            <Pressable>
                <Image source={lostTask} style={style.taskStatus}/>
            </Pressable>
            <View style={style.nameContainer}>
                <Text style={style.taskName}>nome da tarefa</Text>
                <View style={style.taskSubContainer}>
                    <Text style={style.taskSub}>29/01/2024</Text>
                    <Text style={style.taskSub}>•</Text>
                    <Text style={style.taskSub}>21:08</Text>
                </View>
            </View>
            <View style={style.taskPriority}/>
            
        </View>
    )
}

const style = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFF',
        marginHorizontal: 25,
        marginVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        padding: 15,
        shadowColor: '#00000040',
        elevation: 20
    },
    taskStatus: {
        resizeMode: 'contain',
        height: 50,
        width:  50,
    },
    nameContainer: {
        gap: 3
    },
    taskName: {
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontStyle: 'italic'
    },
    taskSubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    taskSub: {
        color: '#686868',
        fontSize: 16
    },
    taskPriority: {
        backgroundColor: '#FF4F4F',
        width: 25,
        height: '100%',
        borderRadius: 50,
        position: 'absolute',
        right: 10,
    }

})