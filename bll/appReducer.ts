import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Hands} from "../assets/images/hands";

type GameModeType= 'normal' | 'geek' | 'cheat'
export type HandType='rock' | 'scissors' | 'paper' | 'lizard' | 'spock' | 'chack'
export type HandDataType={
    name:HandType,
    img:string
}
type InitialStateType={
    userName:string
    gameMode:GameModeType
    hands:HandDataType []
    userHand:HandDataType | null
    phoneHand:HandDataType | null
}

const initialState:InitialStateType = {
    userName: 'Player',
    gameMode:'geek',
    hands:[
        {
            name:'rock',
            img:Hands.rock
        },
        {
            name:'scissors',
            img:Hands.scissors
        },
        {
            name:'paper',
            img:Hands.paper
        },
        {
            name:'lizard',
            img:Hands.lizard
        },
        {
            name:'spock',
            img:Hands.spock
        },
        {
            name:'chack',
            img:Hands.chack
        },
    ],
    userHand:null,
    phoneHand:null
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setUserHand(state,action:PayloadAction<{hand:HandType}>){
            const elem=state.hands.find(h=>h.name===action.payload.hand)
            if(elem){
                state.userHand=elem
            }
        }
    }
})

export const appReducer = slice.reducer
export const {setUserHand}=slice.actions