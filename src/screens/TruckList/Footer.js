import React, {ReactElement} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {palette} from '../../constants/colors';
import {CounterWidget} from './CounterWidget';

export const Footer = ({trucks})=> {
  // This does not sound right ...
  return (
    <View style={styles.container}>
      <CounterWidget />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: palette.defaultPrimaryColor
  },
});
