import React, {ReactHTMLElement} from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import {palette} from "../constants/colors";

interface IStyle {
  container: ViewStyle,
}

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
  }
});

interface IProps {
  style?: ViewStyle,
  color?: string,
  children?: React.ReactChild,
  onPress: () => void,
}

export const Button = (props: IProps) =>
  <TouchableOpacity
    style={[styles.container, props.style, {backgroundColor: props.color || palette.accentColor}]}
    onPress={props.onPress}>
    <View style={styles.container}>
      {props.children}
    </View>
  </TouchableOpacity>;