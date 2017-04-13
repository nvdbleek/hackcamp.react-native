import React from 'react';
import {View, Text} from 'react-native';
import {MapScreen} from "./MapScreen";
import {Button} from "../../components/Button";

interface IProps {
  goBack: () => void
}

export const Map = (props: IProps) =>
  <View style={{flex: 1}}>
    <MapScreen style={{flex: 9}}/>
    <Button style={{flex: 1}} onPress={props.goBack}>
      <Text style={{fontSize: 20, color: 'white'}}>Go back</Text>
    </Button>
  </View>;
