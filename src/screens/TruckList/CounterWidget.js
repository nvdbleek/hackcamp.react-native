import React, { ReactElement } from 'react';
import {StyleSheet, Text, View, ViewStyle, TextStyle} from 'react-native';
import {palette} from '../../constants/colors';

export const CounterWidget = () => (
  <View style={styles.container}>
    <Text style={styles.counter}>
      {42}
    </Text>
    <Text style={styles.counterText}>
      {"Total"}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  counter: {
    fontSize: 32,
    color: palette.textPrimaryColor,
  },

  counterText: {
    color: palette.lightPrimaryColor,
  }
});
