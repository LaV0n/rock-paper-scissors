import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { setGameMode } from '../../../bll/appReducer'
import { Colors } from '@rneui/base'
import { Theme, useTheme } from '@rneui/themed'
import { useAppDispatch, useAppSelector } from '../../../bll/store'
import { GameModeType } from '../../../common/types'

export const ModeBlock = () => {
   const dispatch = useAppDispatch()
   const { theme } = useTheme()
   const styles = makeStyles(theme)
   const mode = useAppSelector(state => state.app.gameMode)

   const setGameModeHandler = (mode: GameModeType) => {
      dispatch(setGameMode({ mode }))
   }

   return (
      <View style={styles.modeBlock}>
         <Text style={styles.blockName}>Mode :</Text>
         <TouchableOpacity
            style={mode === 'normal' ? styles.difficultActive : styles.difficult}
            onPress={() => setGameModeHandler('normal')}
         >
            <Text style={styles.name}>normal</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={mode === 'geek' ? styles.difficultActive : styles.difficult}
            onPress={() => setGameModeHandler('geek')}
         >
            <Text style={styles.name}>geek</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={mode === 'cheat' ? styles.difficultActive : styles.difficult}
            onPress={() => setGameModeHandler('cheat')}
         >
            <Text style={styles.name}>cheat</Text>
         </TouchableOpacity>
      </View>
   )
}

const makeStyles = (colors: { colors: Colors } & Theme) =>
   StyleSheet.create({
      modeBlock: {
         height: 250,
         marginTop: 20,
         borderWidth: 3,
         borderStyle: 'solid',
         borderColor: colors.colors.primary,
         backgroundColor: colors.colors.secondary,
         borderRadius: 30,
         alignItems: 'center',
         justifyContent: 'space-around',
      },
      difficult: {
         width: '90%',
         borderColor: colors.colors.grey1,
         borderStyle: 'solid',
         borderWidth: 1,
         borderRadius: 20,
      },
      blockName: {
         textAlign: 'center',
         fontSize: 20,
         fontWeight: 'bold',
         color: colors.colors.grey0,
      },
      difficultActive: {
         width: '95%',
         borderColor: colors.colors.white,
         borderStyle: 'solid',
         borderWidth: 2,
         borderRadius: 20,
      },
      name: {
         textAlign: 'center',
         fontSize: 20,
         paddingVertical: 5,
         color: colors.colors.white,
      },
   })
