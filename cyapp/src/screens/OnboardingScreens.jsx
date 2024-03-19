import {StyleSheet, Text, View,Button, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';



export default function OnboardingScreens({navigation}) {

  const Done =()=>{
    <TouchableOpacity
    title={'Done'}
    >
      <Text>Done</Text>
    </TouchableOpacity>
  }

  return (
    <Onboarding
      onskip={()=>navigation.replace("SignUp")}
      onDone={()=>navigation.replace("SignUp")}
      renderDoneButton={Done}
      showDone={true}


      pages={[
        {
          backgroundColor: '#293040',
          image: <Image source={require('../assets/removed_nft.png')} />,
          title: 'Welcome to Coin Vibe',
          subtitle:
            "Let's make a payment through digital coins",
        },
        {
          backgroundColor: '#293040',
          image: <Image source={require('../assets/removed_nft.png')} />,
          title: 'Smart & Secure Method',
          subtitle:
            'Three Phases Of Payment Method',
        },
        {
          backgroundColor: '#293040',
          image: <Image source={require('../assets/removed_nft.png')} />,
          title: 'Improved Visibility Into Transactions',
          subtitle:
            'Digital Money Transaction Like UPI payments',
        },
      ]}
    />
  );
}