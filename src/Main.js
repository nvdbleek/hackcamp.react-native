import React, {Component} from 'react';
import {View} from 'react-native';
import {TruckListScreen} from './screens/TruckList/TruckListScreen';
import {globalStyles} from './styles/globalStyles';
import {TruckFormScreen} from './screens/TruckForm/TruckFormScreen';
import {appInfos} from './constants/appInfos';
import {filters} from "./constants/filters";

export class Main extends Component{

  constructor(props) {
    super(props);

    // This is the initial state of the component.
    // It contains a default list of trucks.
    // isOnList is used to know if the main screen should be rendered instead of the form.
    // The default filtering is none so all trucks are visible
    this.state = {
      trucks: [
        {
          name: "Truck 1",
          active: true
        },
        {
          name: "Truck 2",
          active: false
        }
      ],
      isOnList: true,
      filter: filters.NONE,
    };
  }

  // Updates the way trucks are filtered on the main list.
  setFilter = (filter) => this.setState({filter});

  toggleTruck = (truckToToggle) => {
    // Toggle truck is a function that toggles the active flag of a truck.
  };

  switchScreens = () => this.setState({isOnList: !this.state.isOnList});

  addTruck(truck) {
    // This function is used to add a truck to the state.
    // Note that it uses setState instead of directly modifying this.state.trucks
    this.setState({trucks: [truck]});
  };

  render() {
    return (
      <View style={globalStyles.container}>
        {this.state.isOnList ?
          <TruckListScreen
            appTitle={appInfos.appTitle}
            switchScreens={this.switchScreens}
          />
          :
          <TruckFormScreen
            switchScreens={this.switchScreens}
          />
        }
      </View>
    );
  }
}
