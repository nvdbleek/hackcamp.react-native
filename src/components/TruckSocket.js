import React, {Component} from "react";
import io from "socket.io-client";
import {BACKEND_URL} from "../constants/backend";
import {connect} from "react-redux";
import {GET_ALL_TRUCKS} from "../actions/trucks";

@connect()
export class TruckSocket extends Component {

  componentDidMount() {
    const socket = io(BACKEND_URL);


    socket.on('trucks', data => {
      this.props.dispatch({
        type: GET_ALL_TRUCKS,
        payload: JSON.parse(data)
      });
    });

    this.setState({socket})

  }

  componentWillUnmount() {
    this.state.socket.close();
  }

  render() {
    return null;
  }
}
