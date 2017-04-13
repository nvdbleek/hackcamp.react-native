import React, {Component} from 'react';
import {View} from 'react-native';
import {TruckListScreen} from './screens/TruckList/TruckListScreen';
import {globalStyles} from './styles/globalStyles';
import {TruckFormScreen} from "./screens/TruckForm/TruckFormScreen";
import {connect} from "react-redux";
import {TruckSocket} from "./components/TruckSocket";
import {Permissions, Notifications} from 'expo';
import axios from 'axios';
import {BACKEND_URL} from "./constants/backend";
import {IEmptyState} from "./types/react";
import {IUiReducer, Screen} from "./reducers/ui";

interface IProps {
  currentScreen: Screen
}

class _Main extends Component<IProps, IEmptyState> {
  componentDidMount() {
    Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS)
      .then((res: {status: string}) => {
        if(res.status !== 'granted'){
          return;
        }
        return Notifications.getExponentPushTokenAsync()
          .then((token: string)=> {
            return axios.post(BACKEND_URL + '/notifications', {
              token
            });
          });
      });
  }

  render() {
    let screen;
    switch(this.props.currentScreen){
      case 'list':
        screen = <TruckListScreen />;
        break;

      case 'form':
        screen = <TruckFormScreen />;
        break;
    }
    return (
      <View style={globalStyles.container}>
        <TruckSocket/>
        {screen}
      </View>);
  }
}

const mapStateToProps = ({ui: {currentScreen}}: {ui: IUiReducer}) => ({
  currentScreen
});

export const Main = connect(mapStateToProps)(_Main);
