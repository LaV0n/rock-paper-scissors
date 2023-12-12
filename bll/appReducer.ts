import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Hands } from '../assets/images/hands'
import { GameModeType, HandType, InitialStateType } from '../common/types'

const initialState: InitialStateType = {
   userName: 'Player',
   gameMode: 'normal',
   hands: [
      {
         name: 'rock',
         img: Hands.rock,
      },
      {
         name: 'scissors',
         img: Hands.scissors,
      },
      {
         name: 'paper',
         img: Hands.paper,
      },
      {
         name: 'lizard',
         img: Hands.lizard,
      },
      {
         name: 'spock',
         img: Hands.spock,
      },
      {
         name: 'chuck',
         img: Hands.chack,
      },
   ],
   userHand: null,
   phoneHand: null,
   winner: '',
   userCount: 0,
   phoneCount: 0,
}

const slice = createSlice({
   name: 'app',
   initialState,
   reducers: {
      setUserHand(state, action: PayloadAction<{ hand: HandType | null }>) {
         const elem = state.hands.find(h => h.name === action.payload.hand)
         if (elem) {
            state.userHand = elem
            state.phoneHand = null
            state.winner = ''
         } else {
            state.userHand = null
         }
      },
      setGameMode(state, action: PayloadAction<{ mode: GameModeType }>) {
         state.gameMode = action.payload.mode
         state.userHand = null
         state.phoneHand = null
         state.winner = ''
      },
      setPhoneHand(state, action: PayloadAction<{ hand: HandType }>) {
         const elem = state.hands.find(h => h.name === action.payload.hand)
         if (elem) {
            state.phoneHand = elem
         }
      },
      setWinner(state, action: PayloadAction<{ winner: string }>) {
         state.winner = action.payload.winner
         if (action.payload.winner === 'PHONE') {
            state.phoneCount++
         }
         if (action.payload.winner === 'YOU') {
            state.userCount++
         }
         if (action.payload.winner === 'CHUCK NORRIS') {
            state.userCount = 0
            state.phoneCount = 0
         }
      },
      setUserName(state, action: PayloadAction<{ name: string }>) {
         state.userName = action.payload.name
      },
   },
})

export const appReducer = slice.reducer
export const { setUserHand, setGameMode, setPhoneHand, setWinner, setUserName } = slice.actions
