import {
   Image,
   ScrollView,
   StyleSheet,
   TextInput,
   TouchableOpacity,
   View,
   Text,
} from 'react-native'
import { useAppDispatch, useAppSelector } from '../bll/store'
import { setGameMode, setUserName } from '../bll/appReducer'
import * as React from 'react'
import { useState } from 'react'
import { Images } from '../assets/images/images'
import { TabBarIcon } from '../components/TabBarIcon'
import { Theme, useTheme } from '@rneui/themed'
import { Colors } from '@rneui/base'

export const SettingScreen = () => {
   const mode = useAppSelector(state => state.app.gameMode)
   const userName = useAppSelector(state => state.app.userName)
   const dispatch = useAppDispatch()
   const [edit, setEdit] = useState(false)
   const [value, setValue] = useState(userName)
   const { theme } = useTheme()
   const styles = makeStyles(theme)

   const changeEditModeHandler = () => {
      if (edit) {
         dispatch(setUserName({ name: value }))
      }
      setEdit(!edit)
   }

   return (
      <ScrollView style={styles.container}>
         <View style={styles.block}>
            <Text style={styles.title}>Setting</Text>
            <View style={styles.playerBlock}>
               {edit ? (
                  <TextInput value={value} onChangeText={setValue} style={styles.input} />
               ) : (
                  <Text style={styles.hiMessage}>{`Hi ${userName}!`}</Text>
               )}
               <TouchableOpacity onPress={changeEditModeHandler}>
                  <TabBarIcon name="pencil" focused={false} />
               </TouchableOpacity>
            </View>
            <View style={styles.mode}>
               <Text style={styles.blockName}>MODE:</Text>
               <TouchableOpacity
                  style={mode === 'normal' ? styles.difficultActive : styles.difficult}
                  onPress={() => dispatch(setGameMode({ mode: 'normal' }))}
               >
                  <Text style={styles.name}>normal</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={mode === 'geek' ? styles.difficultActive : styles.difficult}
                  onPress={() => dispatch(setGameMode({ mode: 'geek' }))}
               >
                  <Text style={styles.name}>geek</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={mode === 'cheat' ? styles.difficultActive : styles.difficult}
                  onPress={() => dispatch(setGameMode({ mode: 'cheat' }))}
               >
                  <Text style={styles.name}>cheat</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.rules}>
               <Text style={styles.title}>Rules:</Text>
               <Image source={{ uri: Images.rules }} style={styles.rulesImg} />
            </View>
         </View>
      </ScrollView>
   )
}

const makeStyles = (colors: { colors: Colors } & Theme) =>
   StyleSheet.create({
      container: {
         height: '100%',
      },
      block: {
         alignItems: 'center',
         justifyContent: 'space-between',
         paddingTop: 20,
         backgroundColor: colors.colors.background,
      },
      title: {
         fontSize: 20,
         fontWeight: 'bold',
         color: colors.colors.grey0,
      },
      mode: {
         width: '80%',
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
         borderColor: 'rgba(0,0,0,0.5)',
         borderStyle: 'solid',
         borderWidth: 1,
         borderRadius: 20,
      },
      name: {
         textAlign: 'center',
         fontSize: 20,
         paddingVertical: 5,
         color: colors.colors.white,
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
      playerBlock: {
         marginTop: 10,
         paddingHorizontal: 20,
         width: '80%',
         height: 70,
         borderWidth: 3,
         borderStyle: 'solid',
         borderColor: colors.colors.primary,
         borderRadius: 30,
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         backgroundColor: colors.colors.secondary,
      },
      hiMessage: {
         fontSize: 22,
         fontWeight: 'bold',
         color: colors.colors.white,
      },
      input: {
         width: '80%',
         borderWidth: 1,
         borderColor: colors.colors.grey0,
         backgroundColor: colors.colors.secondary,
         paddingVertical: 3,
         paddingHorizontal: 5,
         fontSize: 20,
         color: colors.colors.white,
      },
      rules: {
         width: '80%',
         alignItems: 'center',
         marginVertical: 10,
         backgroundColor: colors.colors.secondary,
         borderWidth: 3,
         borderStyle: 'solid',
         borderColor: colors.colors.primary,
         borderRadius: 30,
      },
      rulesImg: {
         width: 320,
         height: 320,
      },
   })
