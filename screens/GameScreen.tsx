import {StyleSheet, TouchableOpacity, Image,} from 'react-native';
import PhoneSVG from '../components/svgIcons/PhoneSVG';
import {Text, View} from '../components/Themed';
import {UserSVG} from "../components/svgIcons/UserSVG";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../bll/store";
import {Hand} from '../components/Hand';
import {setPhoneHand} from "../bll/appReducer";
import { randomHand } from '../common/RandomHand';
import {getWinner} from "../common/getWinner";

export const GameScreen = () => {

    const userHand = useAppSelector(state => state.app.userHand)
    const phoneHand = useAppSelector(state => state.app.phoneHand)
    const dispatch = useAppDispatch()
    const gameMode = useAppSelector(state => state.app.gameMode)
    const [winner,setWinner]=useState<null | string>(null)

    const startButtonHandler =  () => {
        const handPhoneNow = randomHand({gameMode})
        dispatch(setPhoneHand({hand: handPhoneNow}))
        const result = getWinner()
        setTimeout(() => setWinner(result), 500)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Player VS Phone</Text>
                <Text style={styles.title}>Score:</Text>
                <Text style={styles.title}>0-5</Text>
            </View>
            <View style={styles.block}>
                <View style={styles.phoneImg}>
                    <PhoneSVG/>
                </View>
                <View style={styles.field}>
                    {phoneHand
                        ? <Image source={{uri: phoneHand?.img}} style={styles.image}/>
                        : <Text style={styles.waitingTitle}> ... waiting for your move</Text>
                    }
                    {winner && <Text>{`${winner} win`}</Text>}
                    <Image source={{uri: userHand?.img}} style={styles.image}/>
                </View>
                <View style={styles.userBlock}>
                    <View style={styles.userName}>
                        <UserSVG/>
                        <Text style={styles.userTitle}>player</Text>
                    </View>
                    <View style={styles.panel}>
                        <Hand hand={'rock'}/>
                        <Hand hand={'scissors'}/>
                        <Hand hand={'paper'}/>
                        <Hand hand={'lizard'}/>
                        <Hand hand={'spock'}/>
                        <Hand hand={'chack'}/>
                    </View>
                    <TouchableOpacity style={styles.buttonGame} onPress={startButtonHandler}>
                        <Text style={styles.buttonText}>START</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    header: {
        alignItems: 'center',
        marginTop: '5%',
        width: '80%',
        height: '10%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    block: {
        display: 'flex',
        width: '90%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    field: {
        width: '90%',
        height: '50%',
        borderRadius: 30,
        backgroundColor: 'rgba(248,178,12,0.82)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    phoneImg: {
        width: '90%',
        height: '10%',
        alignItems: 'center',
    },
    userBlock: {
        width: '90%',
        height: '40%',
        display: 'flex',
        alignItems: 'center',
    },
    panel: {
        width: '100%',
        height: '50%',
        borderStyle: 'solid',
        borderColor: '#d59102',
        borderWidth: 2,
        borderRadius: 10,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    userName: {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonGame: {
        width: '90%',
        height: '20%',
        margin: 10,
        borderRadius: 30,
        backgroundColor: 'rgb(115,243,35)',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    userTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
    image: {
        width: 100,
        height: 100,
    },
    waitingTitle: {
        fontSize: 26,
        width: '50%',
        textAlign: 'center'

    },
});
