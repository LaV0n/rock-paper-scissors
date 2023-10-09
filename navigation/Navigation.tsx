import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { GameScreen } from '../screens/GameScreen'
import { RootTabParamList } from '../common/types'
import { SettingScreen } from '../screens/SettingScreen'
import { TabBarIcon } from '../components/TabBarIcon'
import { useTheme } from '@rneui/themed'

export function Navigation() {
   const BottomTab = createBottomTabNavigator<RootTabParamList>()
   const { theme } = useTheme()

   return (
      <NavigationContainer>
         <BottomTab.Navigator
            screenOptions={{ tabBarStyle: { backgroundColor: theme.colors.background } }}
         >
            <BottomTab.Screen
               name="Game"
               component={GameScreen}
               options={{
                  headerShown: false,
                  title: '',
                  tabBarIcon: ({ focused }) => <TabBarIcon name="gamepad" focused={focused} />,
               }}
            />
            <BottomTab.Screen
               name="Setting"
               component={SettingScreen}
               options={{
                  headerShown: false,
                  title: '',
                  tabBarIcon: ({ focused }) => <TabBarIcon name="gear" focused={focused} />,
               }}
            />
         </BottomTab.Navigator>
      </NavigationContainer>
   )
}
