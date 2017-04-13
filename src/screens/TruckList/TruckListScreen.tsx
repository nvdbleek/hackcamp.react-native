import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import {ListView} from '@shoutem/ui';
import {Entypo} from '@expo/vector-icons';

import {Banner} from '../../components/Banner';
import {globalStyles} from '../../styles/globalStyles';
import {Footer} from './Footer';
import {Header} from './Header';
import {ITruck, EFilter, IFilters, filters} from "../../types/entites";
import { Button } from '../../components/Button';
import {connect} from "react-redux";
import {ITruckAction, IFilterAction, IAction} from "../../types/redux";
import {toggleTruck, deleteTruck} from "../../actions/trucks";
import {switchScreens} from "../../actions/ui";
import Component = React.Component;
import {IEmptyState} from "../../types/react";

import { getAllTrucks } from "../../actions/trucks";
import {IActivateTruckReducer} from "../../reducers/activeTrucks";

interface IProps {
    trucks: ITruck[]
    filter: IFilters
    activeTrucks: IActivateTruckReducer
    toggleTruck: (truck: ITruck) => void
    switchScreens: () => void
    getAllTrucks: () => void
    deleteTruck: (truck: ITruck) => void
}

interface IStyle {
  rowContainer: ViewStyle,
  row: TextStyle,
}

const styles = StyleSheet.create<IStyle>({
  rowContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, row: {
    fontSize: 20,
  }
});

const filtring = {
  [EFilter.NONE]: (trucks: ITruck[]) => trucks,
  [EFilter.ACTIVE]: (trucks: ITruck[]) => trucks.filter(truck => truck.active),
  [EFilter.INACTIVE]: (trucks: ITruck[]) => trucks.filter(truck => !truck.active),
};

class _TruckListScreen extends Component<IProps, IEmptyState> {

  renderRow = (truck: ITruck) => (
    <View style={styles.rowContainer}>
      <TouchableOpacity style={{flexDirection: 'row', paddingRight: 50}} onPress={() => this.props.toggleTruck(truck)}>
        <Text style={styles.row}>{truck.name}</Text>
        {!!this.props.activeTrucks[truck.uuid] && <Entypo name="check" size={20}/>}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.deleteTruck(truck)}>
        <Entypo name="trash" color="tomato" size={20}/>
      </TouchableOpacity>
    </View>
  );

  componentDidMount() {
    this.props.getAllTrucks();
  }

  render(){
    const {trucks, switchScreens, filter} = this.props;
    let filteredList = filtring[filters.indexOf(filter)](trucks);
    return (
      <View style={globalStyles.container}>
        <Banner />
        <Header />
        <View style={{flex:7.5}}>
          <ListView
            data={filteredList}
            renderRow={this.renderRow}
          />
        </View>
        <View style={{flex: 0.5}}>
          <Button
            onPress={switchScreens}>
            <Text style={{fontSize: 20, color: 'white'}}>Add a truck</Text>
            <Entypo name="circle-with-plus" size={20} color='white'/>
          </Button>
        </View>
        <Footer />
      </View>
    );
  }
}

const mapStateToProps = ({trucks, filter, activeTrucks}: {trucks: ITruck[], filter: IFilters, activeTrucks: IActivateTruckReducer}) => ({
  trucks: trucks.map(truck => ({...truck, active: activeTrucks[truck.uuid]})),
  filter,
  activeTrucks
});

const mapDispatchToProps = (dispatch: (action: ITruckAction | IFilterAction | IAction | Function  ) => void) => ({
  toggleTruck: (truck: ITruck) => dispatch(toggleTruck(truck)),
  switchScreens: () => dispatch(switchScreens('form')),
  getAllTrucks: () => dispatch(getAllTrucks()),
  deleteTruck: (truck: ITruck) => dispatch(deleteTruck(truck)),
});

export const TruckListScreen = connect(mapStateToProps, mapDispatchToProps)(_TruckListScreen);
