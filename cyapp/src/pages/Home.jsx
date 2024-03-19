import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home({navigation}) {
  return (
    <View>
      <Text style={styles.header}>CV-Pay</Text>
      <View></View>
      <View>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity onPress={()=>navigation.navigate('Scanner')}>
            <View style={styles.mainBox}>
              <View style={styles.icons}>
                <Icon name="payment" size={45} color={'#050505'} />
              </View>
              <Text style={styles.text}>UPI</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
}
// TouchableOpacity

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: 'black',
    marginLeft: 10,
  },
  container: {
    margin: 10,
    // width:'70vw',
    backgroundColor: '#5c5a54',
    height: 250,
    borderRadius: 15,
  },
  icons: {
    width: 70,
    backgroundColor: '#ffffff',
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  mainBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontSize: 15,
    color: 'white',
    marginLeft: 30,
  },
});
