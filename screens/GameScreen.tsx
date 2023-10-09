import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native'
import PhoneSVG from '../components/svgIcons/PhoneSVG'
import { UserSVG } from '../components/svgIcons/UserSVG'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../bll/store'
import { Hand } from '../components/Hand'
import { setPhoneHand, setWinner } from '../bll/appReducer'
import { randomHand } from '../utils/RandomHand'
import { getWinner } from '../utils/getWinner'
import { Colors } from '@rneui/base'
import { Theme, useTheme } from '@rneui/themed'

export const GameScreen = () => {
   const userHand = useAppSelector(state => state.app.userHand)
   const phoneHand = useAppSelector(state => state.app.phoneHand)
   const dispatch = useAppDispatch()
   const gameMode = useAppSelector(state => state.app.gameMode)
   const winner = useAppSelector(state => state.app.winner)
   const userName = useAppSelector(state => state.app.userName)
   const userCount = useAppSelector(state => state.app.userCount)
   const phoneCount = useAppSelector(state => state.app.phoneCount)
   const { theme } = useTheme()
   const styles = makeStyles(theme)

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
                  <Text style={styles.userTitle}>Phone</Text>
                  <PhoneSVG />
               </View>
               {phoneHand ? (
                  <Image source={{ uri: phoneHand?.img }} style={styles.image} />
               ) : (
                  <Text style={styles.waitingTitle}> ... waiting for your move</Text>
               )}
               {winner && <Text style={styles.winnerTitle}>{`${winner} win!!!`}</Text>}
               <Image source={{ uri: userHand?.img }} style={styles.image} />
               <View style={styles.userName}>
                  <UserSVG />
                  <Text style={styles.userTitle}>{userName}</Text>
               </View>
            </View>
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
         </View>
      </View>
   )
}

const makeStyles = (colors: { colors: Colors } & Theme) =>
   StyleSheet.create({
      container: {
         alignItems: 'center',
         justifyContent: 'space-between',
         paddingTop: '5%',
         height: '100%',
         backgroundColor: colors.colors.background,
      },
      title: {
         fontSize: 20,
         fontWeight: 'bold',
         color: colors.colors.grey0,
      },
      titleCount: {
         fontSize: 28,
         fontWeight: 'bold',
         color: colors.colors.white,
      },
      header: {
         alignItems: 'center',
         width: '80%',
         height: '10%',
         justifyContent: 'space-between',
      },
      block: {
         display: 'flex',
         width: '90%',
         height: '90%',
         alignItems: 'center',
      },
      field: {
         width: '90%',
         height: '55%',
         borderRadius: 30,
         marginTop: '5%',
         backgroundColor: colors.colors.divider,
         justifyContent: 'space-around',
         alignItems: 'center',
         borderColor: colors.colors.grey0,
         borderWidth: 3,
      },
      phoneImg: {
         width: '90%',
         height: '10%',
         gap: 50,
         justifyContent: 'flex-end',
         alignItems: 'center',
         flexDirection: 'row',
      },
      userBlock: {
         width: '90%',
         height: '40%',
         justifyContent: 'space-between',
         alignItems: 'center',
      },
      panel: {
         width: '100%',
         marginTop: '10%',
         height: '50%',
         borderStyle: 'solid',
         borderColor: colors.colors.primary,
         borderWidth: 2,
         borderRadius: 10,
         flexDirection: 'row',
         justifyContent: 'space-around',
         alignItems: 'center',
      },
      userName: {
         width: '80%',
         height: '10%',
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'flex-start',
      },
      buttonGame: {
         width: '90%',
         height: '20%',
         margin: 10,
         borderRadius: 30,
         backgroundColor: colors.colors.primary,
         alignItems: 'center',
         justifyContent: 'space-around',
      },
      buttonGameDisabled: {
         width: '90%',
         height: '20%',
         margin: 10,
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
      userTitle: {
         fontSize: 24,
         fontWeight: 'bold',
         color: colors.colors.error,
      },
      image: {
         width: 100,
         height: 100,
      },
      waitingTitle: {
         fontSize: 26,
         width: '50%',
         textAlign: 'center',
      },
      winnerTitle: {
         borderWidth: 3,
         width: '90%',
         fontSize: 26,
         fontWeight: 'bold',
         textAlign: 'center',
         borderColor: colors.colors.white,
         paddingVertical: 10,
         backgroundColor: colors.colors.error,
         color: colors.colors.white,
      },
   })
