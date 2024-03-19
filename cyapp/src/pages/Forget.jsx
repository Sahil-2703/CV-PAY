import React from 'react';
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

const Forget = () => {
 
  const [email, onChangeEmail] = React.useState('');
  placeholderEmail = 'Enter your email';
  const handleLogin = () => {
    Alert.alert(
      'Sign up Successful',
      'Email: ${email}',
      [
        {
          text: 'Continue',
          onPress: () => console.log('Continue Pressed'),
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.scrollViewContent}
      scrollEnabled={false}>
      <View style={styles.head}>
        <Image style={styles.image} source={require('../assets/removed_nft.png')} />
        <Text style={styles.title}>Forgot Password</Text>
        
      </View>
        
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={onChangeEmail}
          value={email}
          placeholder={placeholderEmail}
          placeholderTextColor="gray"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  image: {
    alignSelf: 'center',
    height: 200,
    width: 200,
  },
  title: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '900',
    marginTop: 20,
  },
  input: {
    height: 'auto',
    width: 250,
    alignSelf: 'center',
    margin: 5,
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: 'black',
    backgroundColor: 'lightgray',
  },
  button: {
    backgroundColor: 'black',
     alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    width: 250,
    margin: 14,
    padding: 12,
  },
});

export default Forget;