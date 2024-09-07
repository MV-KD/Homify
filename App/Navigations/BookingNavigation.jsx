import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import BusinessListByCategoryScreen from '../Screens/BusinessListByCategoryScreen/BusinessListByCategoryScreen';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen/BusinessDetailsScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';

export default function BookingNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown : false
    
       }}>
            <Stack.Screen name ='booking' component={BookingScreen}/>
            <Stack.Screen name="BookingScreen" component={BookingScreen} />
            <Stack.Screen name ='business-detail' component={BusinessDetailsScreen}/>
       </Stack.Navigator>
  )
}