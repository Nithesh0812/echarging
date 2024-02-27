// HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    const { user } = navigation.params || {};  // Retrieve user data from navigation params

  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Text
       // onPress={()=> navigation.navigate('Home')}
        style={{fontSize:24, fontWeight:'bold'}}>SettingsScreen
        </Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
