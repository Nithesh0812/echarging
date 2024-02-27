import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios'; // Import Axios

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');   
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://172.20.36.72:3000/login', {
        username,
        password,
      });
  
      // No success message is set here
      // Instead, you might want to perform any necessary action upon successful login
      navigation.navigate('Home', { user: response.data.user });
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid credentials. Please try again.');
    }
  };
  
  const handleRegister = async () => {
    try {
      await axios.post('http://172.20.36.72:3000/register', {
        username,
        password,
      });
  
      await handleLogin();
    } catch (error) {
      console.error('Registration error:', error);
      setError('Error during registration. Please try again.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.registerText} onPress={() => navigation.navigate('Register')}>
        Don't have an account? Register here.
      </Text>
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
  registerText: {
    marginTop: 20,
    color: 'blue',
  },
});

export default LoginScreen;
