import { Image, ScrollView, StyleSheet, View, Text } from 'react-native'
import * as React from 'react'
import { Images } from '../../assets/images/images'
import { Theme, useTheme } from '@rneui/themed'
import { Colors } from '@rneui/base'
import { UserName } from './components/UserName'
import { ModeBlock } from './components/ModeBlock'

export const SettingScreen = () => {
   const { theme } = useTheme()
   const styles = makeStyles(theme)

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Setting</Text>
         <ScrollView style={styles.block}>
            <UserName />
            <ModeBlock />
            <View style={styles.rules}>
               <Text style={styles.title}>Rules :</Text>
               <Image source={{ uri: Images.rules }} style={styles.rulesImg} />
            </View>
         </ScrollView>
      </View>
   )
}

const makeStyles = (colors: { colors: Colors } & Theme) =>
   StyleSheet.create({
      container: {
         height: '100%',
         paddingTop: 20,
         justifyContent: 'space-between',
         alignItems: 'center',
         backgroundColor: colors.colors.background,
      },
      block: {
         width: '90%',
      },
      title: {
         fontSize: 20,
         paddingBottom: 10,
         fontWeight: 'bold',
         color: colors.colors.grey0,
      },
      rules: {
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
