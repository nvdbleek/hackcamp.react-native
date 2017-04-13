import React, { ReactElement } from 'react';
import {StyleSheet, Text, View, ViewStyle, TextStyle} from 'react-native';
import {palette} from '../../constants/colors';


interface IProps {
  name : String,
  number : number
}

export const CounterWidget = ({ number, name}: IProps) : ReactElement<IProps> => (
  <View style={styles.container}>
    <Text style={styles.counter}>
      {number}
    </Text>
    <Text style={styles.counterText}>
      {name}
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
