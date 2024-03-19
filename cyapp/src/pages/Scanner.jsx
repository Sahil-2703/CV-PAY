import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Navbar from './Navbar';

export default function Scanner({navigation}) {
  
  const [data, setData]=useState({
    number:'',
    message:''
  })
  const onChangeFunc = (name, value) => {
    setData({ ...data, [name]: value });
  };
  placeholderNumber = 'Enter Amount';
  placeholderMessage = 'Add a message (optional)';
  return (
    <View>
      <Navbar title={'Pay'} />
      <View style={styles.container}>
        <View style={styles.mainProfile}>
          <View style={styles.profile}>
            <Text style={styles.text}>SS</Text>
          </View>
          <View style={styles.userName}>
            <Text>SAHIL RAKESH KUMAR SINGH</Text>
            <Text>cvpay-11223430116@okbizaxis</Text>
          </View>
        </View>
        <View>
        <TextInput
          name='number'
          style={styles.input}
          onChangeText={text => onChangeFunc('number', text)}
          keyboardType="number-pad"
          value={data.number}
          placeholder={placeholderNumber}
          placeholderTextColor="gray"
        />
        <TextInput
          name='message'
          style={styles.input}
          onChangeText={text => onChangeFunc('message', text)}
          value={data.message}
          placeholder={placeholderMessage}
          placeholderTextColor="gray"
        />
        </View>
      </View>
      <View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Notification')}>
          <Text style={styles.buttonText}>PROCEED TO PAY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#293040',
    height: 250,
    margin: 5,
    borderRadius: 10,
  },
  profile: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainProfile: {
    display: 'flex',
    flexDirection: 'row',
    margin: 15,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  userName:{
    marginLeft:15
  },
  input: {
    height: 'auto',
    width: 500,
    margin: 15,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: 'black',
    backgroundColor: 'lightgray',
    fontSize:20
  },
  button: {
    backgroundColor: '#293040',
    padding: 10,
    borderRadius: 10,
    width: 500,
    margin: 20,
    padding: 12,
    height:'auto',
    
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
});

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const Scanner = () => {
//   const [amount, setAmount] = useState('');
//   const [upiId, setUpiId] = useState('');
//   const [remarks, setRemarks] = useState('');

//   const handlePay = () => {
//     // Your payment logic here
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Unified Payments Interface (UPI)</Text>
//       <View style={styles.paymentDetails}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Amount"
//           keyboardType="numeric"
//           value={amount}
//           onChangeText={text => setAmount(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter UPI ID"
//           value={upiId}
//           onChangeText={text => setUpiId(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Add Remarks (Optional)"
//           value={remarks}
//           onChangeText={text => setRemarks(text)}
//         />
//       </View>
//       <TouchableOpacity style={styles.payButton} onPress={handlePay}>
//         <Text style={styles.payButtonText}>Pay</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   paymentDetails: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   payButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   payButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Scanner;
