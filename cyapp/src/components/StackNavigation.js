import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreens from '../screens/OnboardingScreens';
import { Home, Login, SignUp } from '../pages';
import { BottomNavigation } from '.';
import Forget from '../pages/Forget';




const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={OnboardingScreens}/>
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp}/>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login}/>
        <Stack.Screen name="Forget" options={{ headerShown: false }} component={Forget}/>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home}/>
        <Stack.Screen name="BottomNavigation" options={{ headerShown: false }} component={BottomNavigation}/>
      </Stack.Navigator>
    </>
  )
}

const styles = StyleSheet.create({})