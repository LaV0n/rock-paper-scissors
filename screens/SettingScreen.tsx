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
                        <TabBarIcon name="pencil" color={'rgba(255,255,255,0.7)'}/>
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
        height:'100%'
    },
    block:{
        display:'flex',
        alignItems:"center",
        justifyContent:'space-between',
        paddingTop:20,
        backgroundColor: '#3FA796',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'rgba(255,255,255,0.7)'
    },
    mode: {
        width: '80%',
        height: 250,
        marginTop: 20,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#2A0944',
        backgroundColor: 'rgba(42,9,68,0.3)',
        borderRadius:30,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    difficult: {
        width: '90%',
        borderColor: 'rgba(0,0,0,0.5)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20
    },
    name: {
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 5,
        color:'#fff'
    },
    blockName: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'rgba(255,255,255,0.7)'
    },
    difficultActive: {
        width: '95%',
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 20
    },
    playerBlock: {
        marginTop: 10,
        paddingHorizontal:20,
        width: '80%',
        height: 70,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#2A0944',
        borderRadius:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: 'rgba(42,9,68,0.3)',
    },
    hiMessage:{
        fontSize: 22,
        fontWeight: 'bold',
        color:'#fff'
    },
    input:{
        width:'80%',
        borderWidth:1,
        borderColor:'rgba(255,255,255,0.7)',
        backgroundColor: 'rgba(42,9,68,0.3)',
        paddingVertical:3,
        paddingHorizontal:5,
        fontSize:20,
        color:'#fff'
    },
    rules:{
       width:'80%',
        alignItems:'center',
        marginVertical:10,
        backgroundColor: 'rgba(42,9,68,0.3)',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#2A0944',
        borderRadius:30,
    },
    rulesImg:{
        width:320,
        height:320,
    },
});
