import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios'; // Import axios

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      // Replace 'http://your-backend-url:3000' with your actual backend URL
      const response = await axios.post('http://172.20.36.72:3000/register', {
        username,
        password,
        email,
        phoneNumber,
      });

      if (response && response.data && response.data.message) {
        console.log(response.data.message);
        // Handle success, maybe navigate to a login screen
      } else {
        console.error('Unexpected server response:', response);
        setError('Unexpected response from the server');
      }
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data.error : error.message);
      setError('Error during registration. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default RegisterScreen;
