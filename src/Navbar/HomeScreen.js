import React from 'react';
import { View, Text } from 'react-native';
import MapScreen from '../Maps/maps'; // Adjust the path according to your file structure


const HomeScreen = ({ route }) => {
  const { user } = route.params || {}; // Access user data from route params

  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Text
          onPress={() => alert("This is the Home Screen")}
          style={{ fontSize: 24, fontWeight: 'bold' }}
        >
          Welcome, {user ? user.username : 'Guest'}!
        </Text>
      </View>
      <MapScreen />{/* Render the MapScreen component here */}
    </View>
  );
};

export default HomeScreen;
