import React, {ReactElement} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {palette} from '../../constants/colors';
import {CounterWidget} from './CounterWidget';
import {ITruck} from '../../types/entites';

interface IProps {
  trucks: ITruck[]
}

export const Footer = ({trucks}: IProps): ReactElement<IProps> => {
  // This does not sound right ...
  return (
    <View style={styles.container}>
      <CounterWidget />
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
