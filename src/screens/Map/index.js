import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {MapScreen} from "./MapScreen";
import {Button} from "../../components/Button";
import {switchScreens} from "../../actions/ui";

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(switchScreens('list')),
});

const _Map = (props) =>
  <View style={{flex: 1}}>
    <MapScreen style={{flex: 9}}/>
    <Button style={{flex: 1}} onPress={props.goBack}>
      <Text style={{fontSize: 20, color: 'white'}}>Go back</Text>
    </Button>
  </View>;
export const Map = connect(null, mapDispatchToProps)(_Map);