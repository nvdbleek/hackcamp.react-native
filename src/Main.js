import React, {Component} from "react";
import {View} from "react-native";
import {TruckListScreen} from "./screens/TruckList/TruckListScreen";
import {globalStyles} from "./styles/globalStyles";
import {TruckFormScreen} from "./screens/TruckForm/TruckFormScreen";
import {connect} from "react-redux";
import {TruckSocket} from "./components/TruckSocket";
import {Notifications, Permissions} from "expo";
import axios from "axios";
import {BACKEND_URL} from "./constants/backend";
import {IUiReducer, Screen} from "./reducers/ui";
import {MapScreen} from "./screens/Map/MapScreen";
import {Map} from "./screens/Map/index";

class _Main extends Component {
  componentDidMount() {
    Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS)
      .then((res: { status: string }) => {
        if (res.status !== 'granted') {
          return;
        }
        return Notifications.getExponentPushTokenAsync()
          .then((token: string) => {
            return axios.post(BACKEND_URL + '/notifications', {
              token
            });
          });
      });
  }

  render() {
    let screen;
    switch (this.props.currentScreen) {
      case 'list':
        screen = <TruckListScreen />;
        break;

      case 'form':
        screen = <TruckFormScreen />;
        break;

      case 'map':
        screen = <Map />;
    }
    return (
      <View style={globalStyles.container}>
        <TruckSocket/>
        {screen}
      </View>);
  }
}

const mapStateToProps = ({ui: {currentScreen}}) => ({
  currentScreen
});

export const Main = connect(mapStateToProps)(_Main);
