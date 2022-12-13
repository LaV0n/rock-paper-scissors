import {StyleSheet, TouchableOpacity, Image,} from 'react-native';
import PhoneSVG from '../components/svgIcons/PhoneSVG';
import {Text, View} from '../components/Themed';
import {UserSVG} from "../components/svgIcons/UserSVG";
import React from "react";
import {useAppDispatch, useAppSelector} from "../bll/store";
import {Hand} from '../components/Hand';
import {setPhoneHand, setWinner} from "../bll/appReducer";
import {randomHand} from '../common/RandomHand';
import {getWinner} from "../common/getWinner";

export const GameScreen = () => {

    const userHand = useAppSelector(state => state.app.userHand)
    const phoneHand = useAppSelector(state => state.app.phoneHand)
    const dispatch = useAppDispatch()
    const gameMode = useAppSelector(state => state.app.gameMode)
    const winner = useAppSelector(state => state.app.winner)
    const userName = useAppSelector(state => state.app.userName)
    const userCount = useAppSelector(state => state.app.userCount)
    const phoneCount = useAppSelector(state => state.app.phoneCount)

    const startButtonHandler = () => {
        const handPhoneNow = randomHand({gameMode})
        dispatch(setPhoneHand({hand: handPhoneNow}))
        let result = ''
        if (userHand) {
            result = getWinner({userHand: userHand.name, phoneHand: handPhoneNow})
            dispatch(setWinner({winner: result}))
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Player VS Phone</Text>
                <Text style={styles.titleCount}>
                    {userCount} - {phoneCount}
                </Text>
            </View>
            <View style={styles.block}>
                <View style={styles.field}>
                    <View style={styles.phoneImg}>
                        <PhoneSVG/>
                    </View>
                    {phoneHand
                        ? <Image source={{uri: phoneHand?.img}} style={styles.image}/>
                        : <Text style={styles.waitingTitle}> ... waiting for your move</Text>
                    }
                    {winner
                        && <Text style={styles.winnerTitle}>
                            {`${winner} win!!!`}
                        </Text>
                    }
                    <Image source={{uri: userHand?.img}} style={styles.image}/>
                    <View style={styles.userName}>
                        <UserSVG/>
                        <Text style={styles.userTitle}>{userName}</Text>
                    </View>
                </View>
                <View style={styles.userBlock}>
                    <View style={styles.panel}>
                        <Hand hand={'rock'}/>
                        <Hand hand={'scissors'}/>
                        <Hand hand={'paper'}/>
                        <Hand hand={'lizard'}/>
                        <Hand hand={'spock'}/>
                        <Hand hand={'chuck'}/>
                    </View>
                    <TouchableOpacity style={winner?styles.buttonGameDisabled:styles.buttonGame}
                                      onPress={startButtonHandler}
                                     disabled={!!winner}>
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
        backgroundColor: '#3FA796',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.75)'
    },
    titleCount: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    header: {
        alignItems: 'center',
        marginTop: '5%',
        width: '80%',
        height: '10%',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#3FA796',
    },
    block: {
        display: 'flex',
        width: '90%',
        height: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#3FA796',
    },
    field: {
        width: '90%',
        height: '60%',
        borderRadius: 30,
        backgroundColor: '#fec260',
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'rgba(255,255,255,0.6)',
        borderWidth: 3
    },
    phoneImg: {
        width: '90%',
        height: '10%',
        alignItems: 'flex-end',
        backgroundColor: '#FEC260',
    },
    userBlock: {
        width: '90%',
        height: '30%',
        display: 'flex',
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#3FA796',
    },
    panel: {
        width: '100%',
        height: '65%',
        borderStyle: 'solid',
        borderColor: '#2A0944',
        borderWidth: 2,
        borderRadius: 10,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#3FA796',
    },
    userName: {
        width: '80%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FEC260',
    },
    buttonGame: {
        width: '90%',
        height: '20%',
        margin: 10,
        borderRadius: 30,
        backgroundColor: '#2A0944',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around',
    },
    buttonGameDisabled:{
        width: '90%',
        height: '20%',
        margin: 10,
        borderRadius: 30,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(42,9,68,0.5)',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    userTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'rgba(161,0,53,0.6)'
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
    winnerTitle: {
        borderWidth: 3,
        width: '90%',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        borderColor: '#fff',
        paddingVertical:10,
        backgroundColor: '#A10035',
        color: '#fff'
    }
});
