import React, {ReactElement} from 'react';
import {StyleSheet, View, ViewStyle, Text} from 'react-native';
import {palette} from '../../constants/colors';
import {globalStyles} from '../../styles/globalStyles';
import {HeaderWidget} from './HeaderWidget';
import {IEmptyProps} from "../../types/react";
import {appInfos} from "../../constants/appInfos";

export const Header = (): ReactElement<IEmptyProps> =>  {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>{appInfos.appTitle}</Text>
      <HeaderWidget />
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
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: 12,
    backgroundColor: palette.defaultPrimaryColor
  },
});
