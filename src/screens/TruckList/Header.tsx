import React, {ReactElement} from 'react';
import {StyleSheet, View, ViewStyle, Text} from 'react-native';
import {palette} from '../../constants/colors';
import {globalStyles} from '../../styles/globalStyles';
import {HeaderWidget} from './HeaderWidget';
import {EFilter, ITruck, IFilters} from "../../types/entites";

interface IProps {
  filter: IFilters,
  setFilter: (filter: IFilters) => void,
  trucks: ITruck[],
  title: string,
}

export const Header = ({title, filter, setFilter, trucks,}: IProps): ReactElement<IProps> =>  {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>{title}</Text>
      <HeaderWidget
        trucks={filter}
        filter={trucks}
        setFilter={setFilter}
      />
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
