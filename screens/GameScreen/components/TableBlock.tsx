import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import PhoneSVG from '../../../components/svgIcons/PhoneSVG'
import { UserSVG } from '../../../components/svgIcons/UserSVG'
import { Theme, useTheme } from '@rneui/themed'
import { Colors } from '@rneui/base'
import { useAppSelector } from '../../../bll/store'

export const TableBlock = () => {
   const { theme } = useTheme()
   const styles = makeStyles(theme)
   const userHand = useAppSelector(state => state.app.userHand)
   const phoneHand = useAppSelector(state => state.app.phoneHand)
   const winner = useAppSelector(state => state.app.winner)
   const userName = useAppSelector(state => state.app.userName)

   return (
      <View style={styles.field}>
         <View style={styles.userBlock}>
            <Text style={styles.nameTitle}>Phone</Text>
            <PhoneSVG />
         </View>
         <View style={[styles.battleBlock, phoneHand && { justifyContent: 'space-between' }]}>
            {phoneHand ? (
               <Image source={{ uri: phoneHand?.img }} style={styles.image} />
            ) : (
               <Text style={styles.waitingTitle}>
                  {userHand ? "let's start" : '... waiting for your move'}
               </Text>
            )}
            {winner && <Text style={styles.winnerTitle}>{`${winner} win!!!`}</Text>}
            {userHand && <Image source={{ uri: userHand?.img }} style={styles.image} />}
         </View>
         <View style={[styles.userBlock, { justifyContent: 'flex-start' }]}>
            <UserSVG />
            <Text style={styles.nameTitle}>{userName}</Text>
         </View>
      </View>
   )
}

const makeStyles = (colors: { colors: Colors } & Theme) =>
   StyleSheet.create({
      field: {
         width: '90%',
         height: '65%',
         borderRadius: 30,
         paddingVertical: '3%',
         backgroundColor: colors.colors.divider,
         justifyContent: 'space-around',
         alignItems: 'center',
         borderColor: colors.colors.grey0,
         borderWidth: 3,
      },
      userBlock: {
         width: '90%',
         height: '10%',
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'flex-end',
      },
      nameTitle: {
         fontSize: 24,
         fontWeight: 'bold',
         color: colors.colors.error,
      },
      battleBlock: {
         height: '80%',
         width: '80%',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
      },
      image: {
         width: 100,
         height: 100,
      },
      waitingTitle: {
         fontSize: 26,
         width: '50%',
         textAlign: 'center',
         paddingBottom: '5%',
      },
      winnerTitle: {
         borderWidth: 3,
         width: '100%',
         fontSize: 26,
         fontWeight: 'bold',
         textAlign: 'center',
         borderColor: colors.colors.white,
         paddingVertical: 10,
         backgroundColor: colors.colors.error,
         color: colors.colors.white,
      },
   })
