import React from 'react';
import {MapView} from 'expo';

// This makes sure Expo bundles the images.
const images = [
  require('../../../src/assets/truck0.png'),
  require('../../../src/assets/truck1.png'),
  require('../../../src/assets/truck2.png'),
  require('../../../src/assets/truck3.png'),
  require('../../../src/assets/truck4.png'),
  require('../../../src/assets/truck5.png'),
  require('../../../src/assets/truck6.png')
];

// Use this initial region for the map
const initialRegion = {
  latitude: 50.833573,
  longitude: 4.357477,
  latitudeDelta: 0.0200,
  longitudeDelta: 0.0200,
};

// TODO implement a Map component
// You can import MapView from 'expo'
// https://github.com/airbnb/react-native-maps
export const MapScreen = () => null;
