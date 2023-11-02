import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { TabBarIcon } from '../../../components/TabBarIcon'
import { Theme, useTheme } from '@rneui/themed'
import { Colors } from '@rneui/base'
import { useAppDispatch, useAppSelector } from '../../../bll/store'
import { setUserName } from '../../../bll/appReducer'

export const UserName = () => {
   const { theme } = useTheme()
   const styles = makeStyles(theme)
   const userName = useAppSelector(state => state.app.userName)
   const [edit, setEdit] = useState(false)
   const [value, setValue] = useState(userName)
   const dispatch = useAppDispatch()

   const changeEditModeHandler = () => {
      if (edit) {
         dispatch(setUserName({ name: value }))
      }
      setEdit(!edit)
   }

   return (
      <View style={styles.playerBlock}>
         {edit ? (
            <TextInput value={value} onChangeText={setValue} style={styles.input} />
         ) : (
            <Text style={styles.hiMessage}>{`Hi ${userName}!`}</Text>
         )}
         <TouchableOpacity onPress={changeEditModeHandler}>
            <TabBarIcon name={edit ? 'save' : 'pencil'} focused={false} />
         </TouchableOpacity>
      </View>
   )
}
const makeStyles = (colors: { colors: Colors } & Theme) =>
   StyleSheet.create({
      playerBlock: {
         paddingHorizontal: 20,
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
      hiMessage: {
         fontSize: 22,
         fontWeight: 'bold',
         color: colors.colors.white,
      },
   })
