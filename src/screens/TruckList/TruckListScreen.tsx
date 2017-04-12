import React, {ReactElement} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import {ListView} from '@shoutem/ui';
import {Entypo} from '@expo/vector-icons';

import {Banner} from '../../components/Banner';
import {globalStyles} from '../../styles/globalStyles';
import {Footer} from './Footer';
import {Header} from './Header';
import {ITruck, EFilter, IFilters, filters} from "../../types/entites";
import { Button } from '../../components/Button';

interface IProps {
  trucks: ITruck[],
  switchScreens: () => void,
  filter: IFilters,
  setFilter: (filter: IFilters) => void,
  appTitle: string,
  toggleTruck: (truck: ITruck) => void
}

interface IStyle {
  rowContainer: ViewStyle,
  row: TextStyle,
}

const styles = StyleSheet.create<IStyle>({
  rowContainer: {
    backgroundColor: 'white',
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
  }, row: {
    fontSize: 20,
  }
});

const filtring = {
  [EFilter.NONE]: (trucks: ITruck[]) => trucks,
  [EFilter.ACTIVE]: (trucks: ITruck[]) => trucks.filter(truck => !truck.active),
  [EFilter.INACTIVE]: (trucks: ITruck[]) => trucks.filter(truck => truck.active),
};

export const TruckListScreen = ({appTitle, trucks, switchScreens, filter, setFilter, toggleTruck}: IProps): ReactElement<IProps> => {

  let filteredList = filtring[filters.indexOf(filter)](trucks);

  const renderRow = (truck: ITruck) => (
    <Text>Im a truck</Text>
  );

  return (
    <View style={globalStyles.container}>
      <Banner />
      <Header
        trucks={trucks}
        filter={filter}
      />
      <View style={{flex:7.5}}>
        <ListView
          data={filteredList}
          renderRow={renderRow}
        />
      </View>
      <View style={{flex: 0.5}}>
        <Button
          onPress={switchScreens}>
          <Text style={{fontSize: 20, color: 'white'}}>Add a truck</Text>
          <Entypo name="circle-with-plus" size={20} color='white'/>
        </Button>
      </View>
      <Footer trucks={trucks}/>
    </View>
  );
};
