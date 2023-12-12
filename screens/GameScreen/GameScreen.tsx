import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../bll/store'
import { Colors } from '@rneui/base'
import { Theme, useTheme } from '@rneui/themed'
import { HandsBlock } from './components/HandsBlock'
import { TableBlock } from './components/TableBlock'

export const GameScreen = () => {
   const userCount = useAppSelector(state => state.app.userCount)
   const phoneCount = useAppSelector(state => state.app.phoneCount)
   const { theme } = useTheme()
   const styles = makeStyles(theme)

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.title}>Player VS Phone</Text>
            <Text style={styles.titleCount}>
               {userCount} - {phoneCount}
            </Text>
         </View>
         <View style={styles.block}>
            <TableBlock />
            <HandsBlock />
         </View>
      </View>
   )
}

const makeStyles = (colors: { colors: Colors } & Theme) =>
   StyleSheet.create({
      container: {
         alignItems: 'center',
         paddingTop: '10%',
         justifyContent: 'space-between',
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
         paddingBottom: '5%',
      },
      block: {
         display: 'flex',
         width: '100%',
         height: '90%',
         alignItems: 'center',
      },
   })
