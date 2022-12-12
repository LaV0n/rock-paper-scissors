import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from '../components/Themed';
import {useAppDispatch, useAppSelector} from "../bll/store";
import { setGameMode } from '../bll/appReducer';

export const SettingScreen = () => {

    const mode=useAppSelector(state => state.app.gameMode)
    const dispatch=useAppDispatch()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Setting</Text>
            <View style={styles.mode}>
                <Text style={styles.blockName}>
                    MODE:
                </Text>
                <TouchableOpacity style={mode==='normal' ? styles.difficultActive: styles.difficult}
                                  onPress={()=>dispatch(setGameMode({mode:'normal'}))}>
                    <Text style={styles.name}>
                        normal
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={mode==='geek' ? styles.difficultActive: styles.difficult}
                                  onPress={()=>dispatch(setGameMode({mode:'geek'}))}>
                    <Text style={styles.name}>
                        geek
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={mode==='cheat' ? styles.difficultActive: styles.difficult}
                                  onPress={()=>dispatch(setGameMode({mode:'cheat'}))}>
                    <Text style={styles.name}>
                        cheat
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    mode: {
        width: '80%',
        height: '40%',
        marginTop: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    difficult: {
        width: '90%',
        borderColor: 'rgba(0,0,0,0.2)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius:20
    },
    name:{
        textAlign:'center',
        fontSize: 20,
        paddingVertical:5
    },
    blockName:{
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    difficultActive:{
        width: '95%',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius:20
    },
});
