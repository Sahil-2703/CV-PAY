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

const Home = ({navigation}) => {
  const [data, setData] = useState({
    name:'',
    email:'',
    password:'',
    number:''
  })
  placeholderText = 'Enter your name';
  placeholderEmail = 'Enter your email';
  placeholderPassword = 'Enter your password';
  placeholderNumber = 'Enter your number';

  // const onChangeFunc = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  const onChangeFunc = (name, value) => {
    setData({ ...data, [name]: value });
  };
  
  const handleLogin = () => {

  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.scrollViewContent}
      scrollEnabled={false}>
      <View style={styles.head}>
        <Image style={styles.image} source={require('../assets/removed_nft.png')} />
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle} onPress={()=>navigation.navigate('Login')}>Already Registered? Log in here.</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          name='name'
          style={styles.input}
          onChangeText={text => onChangeFunc('name', text)}
          value={data.name}
          placeholder={placeholderText}
          placeholderTextColor="gray"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          name='email'
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => onChangeFunc('email', text)}
          value={data.email}
          placeholder={placeholderEmail}
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign up</Text>
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

export default Home;