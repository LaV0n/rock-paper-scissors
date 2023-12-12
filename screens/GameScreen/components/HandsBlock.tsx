import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Hand } from '../../../components/Hand'
import { Colors } from '@rneui/base'
import { Theme, useTheme } from '@rneui/themed'
import { useAppDispatch, useAppSelector } from '../../../bll/store'
import { randomHand } from '../../../utils/RandomHand'
import { setPhoneHand, setWinner } from '../../../bll/appReducer'
import { getWinner } from '../../../utils/getWinner'

export const HandsBlock = () => {
   const { theme } = useTheme()
   const styles = makeStyles(theme)
   const winner = useAppSelector(state => state.app.winner)
   const gameMode = useAppSelector(state => state.app.gameMode)
   const userHand = useAppSelector(state => state.app.userHand)
   const dispatch = useAppDispatch()

   const startButtonHandler = () => {
      const handPhoneNow = randomHand({ gameMode })
      dispatch(setPhoneHand({ hand: handPhoneNow }))
      let result = ''
      if (userHand) {
         result = getWinner({ userHand: userHand.name, phoneHand: handPhoneNow })
         dispatch(setWinner({ winner: result }))
      }
   }

   return (
      <View style={styles.userBlock}>
         <View style={styles.panel}>
            <Hand hand={'rock'} />
            <Hand hand={'scissors'} />
            <Hand hand={'paper'} />
            <Hand hand={'lizard'} />
            <Hand hand={'spock'} />
            <Hand hand={'chuck'} />
         </View>
         <TouchableOpacity
            style={winner ? styles.buttonGameDisabled : styles.buttonGame}
            onPress={startButtonHandler}
            disabled={!!winner}
         >
            <Text style={styles.buttonText}>START</Text>
         </TouchableOpacity>
      </View>
   )
}

const makeStyles = (colors: { colors: Colors } & Theme) =>
   StyleSheet.create({
      userBlock: {
         width: '90%',
         height: '35%',
         justifyContent: 'space-between',
         alignItems: 'center',
      },
      panel: {
         width: '100%',
         marginTop: '5%',
         height: '50%',
         borderStyle: 'solid',
         borderColor: colors.colors.primary,
         borderWidth: 2,
         borderRadius: 10,
         flexDirection: 'row',
         justifyContent: 'space-around',
         alignItems: 'center',
      },
      buttonGame: {
         width: '90%',
         height: '20%',
         margin: '5%',
         borderRadius: 30,
         backgroundColor: colors.colors.primary,
         alignItems: 'center',
         justifyContent: 'space-around',
      },
      buttonGameDisabled: {
         width: '90%',
         height: '20%',
         margin: '5%',
         borderRadius: 30,
         alignItems: 'center',
         justifyContent: 'space-around',
         backgroundColor: colors.colors.disabled,
      },
      buttonText: {
         fontSize: 16,
         fontWeight: 'bold',
         color: colors.colors.white,
      },
   })
