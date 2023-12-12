import * as React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useTheme } from '@rneui/themed'

export function TabBarIcon(props: {
   name: React.ComponentProps<typeof FontAwesome>['name']
   focused: boolean
}) {
   const { theme } = useTheme()
   return (
      <FontAwesome
         size={30}
         style={props.focused ? { color: theme.colors.primary } : { color: theme.colors.disabled }}
         {...props}
      />
   )
}
