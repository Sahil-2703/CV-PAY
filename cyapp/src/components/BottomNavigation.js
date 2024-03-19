import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { Account, Home, Notification, Profile, Scanner } from '../pages';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
    return (
        <Tab.Navigator
          initialRouteName={'Home'}
          screenOptions={({route}) => ({
            tabBarShowLabel: false,
    
            tabBarStyle: {
              position: 'absolute',
              bottom: 15,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: '#212121',
              borderRadius: 15,
              height: 75,
            },
    
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              let rn = route.name;
    
              if (rn === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (rn === 'Account') {
                iconName = focused ? 'call' : 'call-outline';
              } else if (rn === 'Notification') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (rn === 'Profile') {
                iconName = focused ? 'settings' : 'settings-outline';
              }else {
                return null;
              }
    
              return (
                <View
                  className={`${
                    focused ? 'bg-black shadow-lg shadow-white' : 'bg-[#b7b4bd]'
                  } border-2 border-white w-12 h-12 flex justify-center items-center rounded-full`}>
                  <Icon name={iconName} size={30} color={'#FFFFFF'} />
                </View>
              );
            },
          })}>
          <Tab.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
          <Tab.Screen
            name="Account"
            options={{headerShown: false}}
            component={Account}
          />
          <Tab.Screen
            name="Notification"
            options={{headerShown: false}}
            component={Notification}
          />
          <Tab.Screen
            name="Scanner"
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <View className="bg-[#1da831] border-2 border-white w-16 h-16 absolute bottom-10 flex justify-center items-center rounded-full">
                  <Icon
                    name={focused ? 'add-circle' : 'add-circle-outline'}
                    size={40}
                    color={'#FFFFFF'}
                  />
                </View>
              ),
            }}
            component={Scanner}
          />
          <Tab.Screen
            name="Profile"
            options={{headerShown: false}}
            component={Profile}
          />
          
        </Tab.Navigator>
      );
}

const styles = StyleSheet.create({})