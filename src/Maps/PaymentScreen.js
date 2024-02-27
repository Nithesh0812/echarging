import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PaymentScreen = ({ route }) => {
  const { location } = route.params;
  const [paymentStatus, setPaymentStatus] = useState('pending');

  const handlePayment = () => {
    // Simulate a payment process (you should replace this with your actual payment logic)
    // For demonstration, we'll just set the payment status to 'success' after a delay.
    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paymentInfo}>Location: {location.name}</Text>
      <Text style={styles.paymentInfo}>Cost: 10 units</Text>
      <Text style={styles.paymentInfo}>Payment Status: {paymentStatus}</Text>
      {paymentStatus === 'pending' && (
        <Button title="Pay Now" onPress={handlePayment} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentInfo: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default PaymentScreen;
