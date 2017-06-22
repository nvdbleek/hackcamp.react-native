import React, {Component} from 'react';
import {Text} from 'react-native';
import {MapView} from 'expo';
import {connect} from 'react-redux';
import {ViewStyle} from "react-native";

const images = [
  require('../../../src/assets/truck0.png'),
  require('../../../src/assets/truck1.png'),
  require('../../../src/assets/truck2.png'),
  require('../../../src/assets/truck3.png'),
  require('../../../src/assets/truck4.png'),
  require('../../../src/assets/truck5.png'),
  require('../../../src/assets/truck6.png')
];

const initialRegion = {
  latitude: 50.833573,
  longitude: 4.357477,
  latitudeDelta: 0.0200,
  longitudeDelta: 0.0200,
};

const exampleHigherOrder = (WrappedComponent) =>
  class Component extends Component {
    render(){
      console.log('higher order', this.props);
      return (
        <WrappedComponent {...this.props}/>
      )
    }
  };

const mapStateToProps = (state) => ({
  trucks: state.trucks.filter((truck) => state.activeTrucks[truck.uuid]),
});

@connect(mapStateToProps)
@exampleHigherOrder
export class MapScreen extends React.Component {
  render() {
    return (
      <Text style={{flex: 9}}>Not a map</Text>
    );
  }
}

