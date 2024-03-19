import React, { useState } from 'react';
import {
  Alert,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = ({navigation}) => {
  const [data, setData]=useState({
    number:'',
    password:''
  }),
  placeholderPassword = 'Enter your password';
  placeholderNumber = 'Enter your number';

  const onChangeFunc = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const fakeCredential = {
    number:'9876543210',
    password:'1234'
  }

  const login = async (values, onSubmitProps)=>{
    const loggedInResponse = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    const loggedIn = await loggedInResponse.json();
    if(loggedIn){
      navigation.replave('BottomNavigation')
    }
  }

  

  const handleSubmit = () => {
    if(data.number == fakeCredential.number && data.password == fakeCredential.password){
      navigation.replace('BottomNavigation')
      // console.log('pressed')
    }
    else{
      Alert.alert('Invalid Credentials...!')
    }
  }

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.scrollViewContent}
      scrollEnabled={false}>
      <View style={styles.head}>
        <Image style={styles.image} source={require('../assets/removed_nft.png')} />
        <Text style={styles.title}>Login Account</Text>
        <Text style={styles.subtitle} onPress={()=>navigation.navigate('SignUp')}>Don't have account? Go to SignUp</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          name='number'
          style={styles.input}
          onChangeText={text => onChangeFunc('number', text)}
          keyboardType="number-pad"
          value={data.number}
          placeholder={placeholderNumber}
          placeholderTextColor="gray"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          name='password'
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => onChangeFunc('password', text)}
          value={data.password}
          placeholder={placeholderPassword}
          placeholderTextColor="gray"
        />
        <Text style={styles.subtitle} onPress={()=>navigation.navigate('Forget')}>Forgot Password?</Text>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  head: {
    backgroundColor: 'white',
    height: 250,
    margin: 10,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    height: 200,
    width: 200,
  },
  title: {
    color: 'black',
    fontSize: 35,
    fontWeight: '900',
    marginTop: 20,
  },
  subtitle: {
    color: 'black',
    fontSize: 15,
    margin: 20,
  },
  form: {
    backgroundColor: 'white',
    height: 400,
    marginTop: 40,
    paddingHorizontal: 20,
    justifyContent: 'top',
    alignItems: 'center',
  },
  label: {
    color: 'black',
    width: 250,
    fontSize: 12,
    margin: 5,
    paddingHorizontal: 5,
    textTransform: 'uppercase',
    color: 'gray',
  },
  input: {
    height: 'auto',
    width: 250,
    margin: 5,
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: 'black',
    backgroundColor: 'lightgray',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    width: 250,
    margin: 14,
    padding: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '900',
    textAlign: 'center',
  },
});

export default Login;