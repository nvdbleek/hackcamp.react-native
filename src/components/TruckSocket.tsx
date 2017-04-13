import React from 'react';
import io from 'socket.io-client';
import {BACKEND_URL} from '../constants/backend';
import {connect} from 'react-redux';
import {receivedAllTrucks} from '../actions/trucks';
import Socket = SocketIOClient.Socket;
import { Notifications, Permissions } from "expo";

/**
 * A bit about this pattern...
 *
 * In react you have multiple ways of listening to a websocket
 * - You can use it in the componentDidMount of your main component
 * - You can dispatch an action that creates a socket and listens to its event
 *   to dispatch the right actions in the store
 * - You can use this pattern where you create a component that doesnt do anything
 *   but listen to the socket. If you have a look at the render() method
 *   it doesnt actually do anything, it just returns null.
 */

interface State {
  socket: Socket;
}

interface Props {
  dispatch?: Function
}

@connect()
export class TruckSocket extends React.Component<Props, State> {

  componentDidMount() {
    // TODO:
    // - Listen to the socket located @BACKEND_URL
    // - Listen to the "trucks" event
    // - Dispatch the appropriate action to store the trucks coming from the socket on the 'trucks' event
    // - Store the socket in the state of this component, so that you can close it on componentWillUnmount
    // - the dispatch method is available thanks to @connect
    // - hint : the response is a STRING of ITrucks
    // - Documentation: https://socket.io/docs/
  }

  componentWillUnmount() {
    // - Close the socket
  }

  render(): null {
    return null;
  }
}
