import {HandType, setUserHand} from "../bll/appReducer";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import React from "react";
import {useAppDispatch, useAppSelector} from "../bll/store";

type HandPropsType = {
    hand: HandType
}

export const Hand = ({hand}: HandPropsType) => {

    const userHand = useAppSelector(state => state.app.userHand)
    const hands = useAppSelector(state => state.app.hands)
    const gameMode = useAppSelector(state => state.app.gameMode)
    const dispatch = useAppDispatch()

    let per = hands.find(h => h.name === hand);
    let uri = ''

    if (per) {
        uri = per.img
    }

    return (
        <View style={(gameMode === 'normal' && (hand === 'chack' || hand === 'lizard' || hand === 'spock'))
            ? {display: 'none'}
            : (gameMode === 'geek' && hand === 'chack')
                ? {display: 'none'}
                : {display: 'flex'}
        }>
            <TouchableOpacity style={userHand?.name === hand
                ? gameMode === 'normal'
                    ? styles.imageActive
                    : gameMode === 'geek' ? styles.imageActiveGeek : styles.imageActiveCheat
                : null}
                              onPress={() => dispatch(setUserHand({hand: hand}))}>
                <Image source={{uri: uri}}
                       style={gameMode === 'normal' ? styles.image :
                           gameMode === 'geek' ? styles.imageGeek : styles.imageCheat}
                />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 90,
    },
    imageActive: {
        width: 100,
        height: 100,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: 'red',
        borderRadius: 50
    },
    imageGeek: {
        width: 60,
        height: 60,
    },
    imageActiveGeek: {
        width: 70,
        height: 70,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: 'red',
        borderRadius: 50
    },
    imageCheat: {
        width: 50,
        height: 50,
    },
    imageActiveCheat: {
        width: 60,
        height: 60,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: 'red',
        borderRadius: 50
    },
})