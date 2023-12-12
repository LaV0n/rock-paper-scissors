import { setUserHand } from '../bll/appReducer'
import { Image, ImageStyle, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../bll/store'
import { Colors } from '@rneui/base'
import { Theme, useTheme } from '@rneui/themed'
import { HandPropsType } from '../common/types'

export const Hand = ({ hand }: HandPropsType) => {
   const userHand = useAppSelector(state => state.app.userHand)
   const hands = useAppSelector(state => state.app.hands)
   const gameMode = useAppSelector(state => state.app.gameMode)
   const dispatch = useAppDispatch()
   const winner = useAppSelector(state => state.app.winner)
   const { theme } = useTheme()
   const styles = makeStyles(theme)

   const per = hands.find(h => h.name === hand)
   let uri = ''

   if (per) {
      uri = per.img
   }

   const chooseStyleMode = () => {
      let style: StyleProp<ImageStyle>
      switch (gameMode) {
         case 'normal':
            style = styles.image
            break
         case 'geek':
            style = styles.imageGeek
            break
         case 'cheat':
            style = styles.imageCheat
            break
      }
      return userHand?.name === hand && !winner ? [style, styles.imageActive] : style
   }
   const chooseModeView = (): StyleProp<ViewStyle> => {
      switch (gameMode) {
         case 'geek':
            return hand === 'chuck' && { display: 'none' }
         case 'normal':
            return (
               (hand === 'chuck' || hand === 'lizard' || hand === 'spock') && { display: 'none' }
            )
         default:
            return { display: 'flex' }
      }
   }

   const setUserHandHandler = () => {
      dispatch(setUserHand({ hand }))
   }

   return (
      <TouchableOpacity onPress={setUserHandHandler} style={chooseModeView()}>
         <Image source={{ uri: uri }} style={chooseStyleMode()} />
      </TouchableOpacity>
   )
}
const makeStyles = (colors: { colors: Colors } & Theme) =>
   StyleSheet.create({
      image: {
         width: 90,
         height: 90,
         borderStyle: 'solid',
         borderWidth: 5,
         borderColor: colors.colors.background,
         borderRadius: 50,
      },
      imageActive: {
         borderColor: colors.colors.error,
      },
      imageGeek: {
         width: 60,
         height: 60,
         borderStyle: 'solid',
         borderWidth: 4,
         borderColor: colors.colors.background,
         borderRadius: 50,
      },
      imageCheat: {
         width: 50,
         height: 50,
         borderStyle: 'solid',
         borderWidth: 3,
         borderColor: colors.colors.background,
         borderRadius: 50,
      },
   })
