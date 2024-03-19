import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigation, StackNavigation } from './src/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Home } from './src/pages';



const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide()
    },1000)
  })

  const [firstLaunch, setFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setFirstLaunch(true);
      }
      else {
        setFirstLaunch(false)
      }
    })
  }, [])

  if (firstLaunch == null) {
    return null;
  }
  else if (firstLaunch == true) {
    return (
      <NavigationContainer>
        <StackNavigation/>        
      </NavigationContainer>
    );
  }
  else {
    return (
      <>
      <NavigationContainer >
          <BottomNavigation/>
      </NavigationContainer>
      </>
    )
  }
}

const styles = StyleSheet.create({})

