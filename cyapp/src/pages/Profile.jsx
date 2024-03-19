import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Profile() {
  const [data, setData] = useState({
    name:'',
    email:'',
    phone:'',
    bank:{
      accountNumber:'',
      ifscCode:'',
      amount:'',
      bankName:''
    }
  })

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('http://localhost:5000/user'); // Replace with your actual API endpoint

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const profileData = await response.json();
        setData(profileData);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        // Handle errors appropriately, e.g., display an error mestssage to the user
      }
    };

    fetchProfileData();
  }, []);
  return (
    <View style={styles.back}>
      <Text>Name: {data.name}</Text>
      <Text>Email: {data.email}</Text>
      <Text>Phone: {data.phone}</Text>
      {/* Display bank details conditionally or based on user permissions */}
      {data.bank && (
        <>
          <Text>Bank Account Number: {data.bank.accountNumber}</Text>
          <Text>IFSC Code: {data.bank.ifscCode}</Text>
          <Text>Amount: {data.bank.amount}</Text>
          <Text>Bank Name: {data.bank.bankName}</Text>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  back:{
    backgroundColor:'black'
  }
})