import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Navbar({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: 'white',
    marginLeft: 30,
  },
  container: {
    backgroundColor:'#293040',
    margin:5,
    borderRadius:10,
    height:70,
    display:'flex',
    justifyContent:'center'
  },
});
