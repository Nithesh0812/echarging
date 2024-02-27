import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ navigation }) => {
  const [locations, setLocations] = useState([]);
  const [userBalance, setUserBalance] = useState(100); // Example balance

  useEffect(() => {
    // Replace 'http://your-backend-api.com/stations' with your actual API endpoint
    fetch('http://172.20.36.72:4000/stations')
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error(error));
  }, []);

  // Function to handle marker press
  const handleMarkerPress = (location) => {
    if (userBalance >= 10) { // Assuming the service costs 10 units
      // Deduct the balance and navigate to the payment screen
      setUserBalance(userBalance - 10);
      navigation.navigate('PaymentScreen', { location });
    } else {
      // Display a message to update balance
      alert('Insufficient balance. Please update your balance to avail this service.');
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
       latitude: 17.39720145023989,  // Consider dynamically setting this based on fetched locations
       longitude: 78.49012417456082,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
      }}>
        {locations.map((location) => (
          <Marker
            key={location._id} // Make sure your location objects have a unique identifier
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={location.name}
            description={location.description} // Optionally include a description or other data
            onPress={() => handleMarkerPress(location)} // Pass location to the handler
          />
        ))}
      </MapView>
      <Text style={styles.balanceText}>Current Balance: {userBalance} units</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  balanceText: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 5,
    fontWeight: 'bold',
  },
});

export default MapScreen;
