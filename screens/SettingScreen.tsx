import {Image, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Text, View} from '../components/Themed';
import {useAppDispatch, useAppSelector} from "../bll/store";
import {setGameMode, setUserName} from '../bll/appReducer';
import * as React from "react";
import { TabBarIcon } from '../navigation';
import {useState} from "react";
import {Images} from "../assets/images/images";

export const SettingScreen = () => {

    const mode = useAppSelector(state => state.app.gameMode)
    const userName = useAppSelector(state => state.app.userName)
    const dispatch = useAppDispatch()
    const [edit,setEdit]=useState(false)
    const [value,setValue]=useState(userName)

    const changeEditModeHandler=()=>{
        if(edit){
            dispatch(setUserName({name:value}))
        }
        setEdit(!edit)
    }

    return (
        <ScrollView  style={styles.container}>
            <View style={styles.block}>
                <Text style={styles.title}>Setting</Text>
                <View style={styles.playerBlock}>
                    {edit
                        ?<TextInput value={value} onChangeText={setValue} style={styles.input}/>
                        :<Text style={styles.hiMessage}>
                    {`Hi ${userName}!`}
                        </Text>
                    }
                    <TouchableOpacity onPress={changeEditModeHandler}>
                        <TabBarIcon name="pencil" color={'#000'}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.mode}>
                    <Text style={styles.blockName}>
                        MODE:
                    </Text>
                    <TouchableOpacity style={mode === 'normal' ? styles.difficultActive : styles.difficult}
                                      onPress={() => dispatch(setGameMode({mode: 'normal'}))}>
                        <Text style={styles.name}>
                            normal
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={mode === 'geek' ? styles.difficultActive : styles.difficult}
                                      onPress={() => dispatch(setGameMode({mode: 'geek'}))}>
                        <Text style={styles.name}>
                            geek
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={mode === 'cheat' ? styles.difficultActive : styles.difficult}
                                      onPress={() => dispatch(setGameMode({mode: 'cheat'}))}>
                        <Text style={styles.name}>
                            cheat
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rules}>
                    <Text style={styles.title}>
                        Rules:
                    </Text>
                    <Image source={{uri:Images.rules}} style={styles.rulesImg}/>
                </View>

            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height:'100%'
    },
    block:{
        display:'flex',
        alignItems:"center",
        justifyContent:'space-between',
        paddingTop:20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    mode: {
        width: '80%',
        height: 250,
        marginTop: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        borderRadius:30,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    difficult: {
        width: '90%',
        borderColor: 'rgba(0,0,0,0.2)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20
    },
    name: {
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 5
    },
    blockName: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    difficultActive: {
        width: '95%',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20
    },
    playerBlock: {
        marginTop: 10,
        paddingHorizontal:20,
        width: '80%',
        height: 70,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        borderRadius:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    hiMessage:{
        fontSize: 22,
        fontWeight: 'bold',
    },
    input:{
        width:'80%',
        borderWidth:1,
        paddingVertical:3,
        paddingHorizontal:5,
        fontSize:20
    },
    rules:{
       width:'80%',
        alignItems:'center',
        marginTop:10
    },
    rulesImg:{
        marginTop:10,
        width:'100%',
        height:300,
    },
});
