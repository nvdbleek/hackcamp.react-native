import React, {Component} from 'react';
import {Text, View, Animated } from 'react-native';
import {Banner} from "../../components/Banner";
import {globalStyles} from "../../styles/globalStyles";
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
// @exampleHigherOrder
export class MapScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coordinate: new MapView.AnimatedRegion({
        latitude: 50.8410376004502,
        longitude: 4.359752589212838,
      }),
    };
  }

  render() {
    return (
      <View style={{flex: 9}}>
        <Banner />
        <MapView style={{flex:9}} initialRegion={initialRegion}>
        {
          this.props.trucks.map(truck => {
            return <MapView.Marker
              key={truck.uuid}
              coordinate={truck.coordinate}
              title={truck.name}
              image={images[truck.color]}
            />
          })
        }
        {
          this.props.trucks.map(truck => {
            return <MapView.Polyline 
                      key={truck.uuid}
                      coordinates={truck.coordinateHistory}
                      strokeWidth={2}/>
          })
        }
        </MapView>
      </View>
    );
  }
}

