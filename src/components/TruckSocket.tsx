import React from 'react';
import io from 'socket.io-client';
import {BACKEND_URL} from '../constants/backend';
import {connect} from 'react-redux';
import {GET_ALL_TRUCKS} from '../actions/trucks';
import Socket = SocketIOClient.Socket;
import { Notifications, Permissions } from "expo";


interface State {
  socket: Socket;
}

interface Props {
  dispatch?: Function
}

@connect()
export class TruckSocket extends React.Component<Props, State> {

  componentDidMount() {
    const socket: Socket = io(BACKEND_URL);

    socket.on('trucks', (data: string) => {
      this.props.dispatch({
        type: GET_ALL_TRUCKS,
        payload: JSON.parse(data)
      });
    });

    this.setState({socket: socket})
  }

  componentWillUnmount() {
    this.state.socket.close();
  }

  render(): null {
    return null;
  }
}
