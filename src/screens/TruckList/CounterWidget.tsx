import React, { ReactElement } from 'react';
import {StyleSheet, Text, View, ViewStyle, TextStyle} from 'react-native';
import {palette} from '../../constants/colors';

export const CounterWidget = () : ReactElement<void> => (
  <View style={styles.container}>
    <Text style={styles.counter}>
      {42}
    </Text>
    <Text style={styles.counterText}>
      {"Total"}
    </Text>
  </View>
);

interface IStyle {
  container: ViewStyle,
  counter: TextStyle,
  counterText: TextStyle,
}

const styles = StyleSheet.create<IStyle>({
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
