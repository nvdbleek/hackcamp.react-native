import React, {ReactElement} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {connect} from 'react-redux';

import {palette} from '../../constants/colors';
import {CounterWidget} from './CounterWidget';
import {ITruck} from "../../types/entites";
import {IActivateTruckReducer} from "../../reducers/activeTrucks";

interface IProps {
  trucks?: ITruck[]
  activeTrucks?: IActivateTruckReducer
}


export const _Footer = ({trucks, activeTrucks} : IProps): ReactElement<IProps> => {
  const actives = trucks.filter(truck => activeTrucks[truck.uuid]).length;
  const inActives = trucks.filter(truck => !activeTrucks[truck.uuid]).length;

  return (
    <View style={styles.container}>
      <CounterWidget number={actives} name="Actives"/>
      <CounterWidget number={inActives} name="Inactives"/>
      <CounterWidget number={actives + inActives} name="Total"/>
    </View>
  );
};

interface Styles {
  container: ViewStyle
}

export const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: palette.defaultPrimaryColor
  },
});

const mapStateToProps = ({trucks, activeTrucks}: {trucks: ITruck, activeTrucks: IActivateTruckReducer}) => ({trucks, activeTrucks});

export const Footer = connect(mapStateToProps)(_Footer);
