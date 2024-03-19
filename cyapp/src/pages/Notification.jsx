import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import TouchID from 'react-native-touch-id';

const Notification = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [receiver, setReceiver] = useState('');
  const [upiPin, setUpiPin] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  const handlePayment = () => {
    if (!upiPin) {
      Alert.alert('Error', 'Please enter your UPI PIN to proceed.');
      return;
    }
    else{
      Alert.alert('Payment Completed!');
      return;
      
    }
    // Here you can add your logic to process the payment, like sending a request to your backend
    // For this example, let's just display the payment status
    const status = `Payment of ₹${amount} to ${receiver} successful!`;
    setPaymentStatus(status);
  };

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

  useEffect(()=>{
    // handleBiometric()
  })

  // const handleBiometric = () => {
  //   TouchID.isSupported(optionalConfigObject).then(biometricType=>{
  //     if (biometricType === 'FaceID'){
  //       console.log('FaceID is supported.')
  //     }
  //     else{
  //       console.log('TouchID is supported.')
  //       TouchID.authenticate('', optionalConfigObject).then((success) =>{
  //         console.log('success', success)
  //         setIsAuth(success)
  //       }).catch((err)=>{
  //         console.log('error => ', err)
  //       })
  //     }
  //   })
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Unified Payment Interface (UPI)</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>UPI PIN</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter UPI PIN"
          value={upiPin}
          onChangeText={setUpiPin}
          secureTextEntry={true}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>PAY BY PIN</Text>
      </TouchableOpacity>
      <Text style={styles.paymentStatus}>OR</Text>
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>PAY BY FINGERPRINT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    color:'black',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paymentStatus: {
    marginTop: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default Notification;
