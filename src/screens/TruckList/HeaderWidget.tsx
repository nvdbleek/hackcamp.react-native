import React, {ReactElement} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import {filters, ITruck, IFilters, EFilter} from "../../types/entites";
import {IFilterAction} from "../../types/redux";
import {setFilter} from "../../actions/filters";
import {connect} from "react-redux";
import {IActivateTruckReducer} from "../../reducers/activeTrucks";

interface IProps {
  filter?: IFilters,
  setFilter?: (filter: IFilters) => void,
  trucks?: ITruck[],
  activeTrucks: IActivateTruckReducer,
}

const filtring = {
  [EFilter.NONE]: (trucks: ITruck[]) => trucks.length,
  [EFilter.ACTIVE]: (trucks: ITruck[], activeTrucks: IActivateTruckReducer) => trucks.filter(truck => activeTrucks[truck.uuid]).length,
  [EFilter.INACTIVE]: (trucks: ITruck[], activeTrucks: IActivateTruckReducer) => trucks.filter(truck => !activeTrucks[truck.uuid]).length,
};

export const _HeaderWidget = ({filter, setFilter, trucks, activeTrucks}: IProps): ReactElement<IProps> => {

  const nextFilterIndex = filters.indexOf(filter) + 1;
  const nextFilter = nextFilterIndex >= filters.length ? filters[0] : filters[nextFilterIndex];

  let amountOfTrucks = filtring[nextFilterIndex - 1](trucks, activeTrucks);

  return (
    <TouchableOpacity
      style={globalStyles.widget}
      onPress={() => setFilter(nextFilter as IFilters)}>
      <Text style={globalStyles.title}>{`${amountOfTrucks} ${filter !== filters[0] ? filters[nextFilterIndex - 1] : 'trucks'}`}</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = ({trucks, filter, activeTrucks}: {trucks: ITruck[], filter: IFilters, activeTrucks: IActivateTruckReducer}) => ({
  trucks,
  activeTrucks,
  filter,
});

const mapDispatchToProps = (dispatch: (action: IFilterAction) => void) => ({
  setFilter: (filter: IFilters) => dispatch(setFilter(filter)),
});

export const HeaderWidget = connect(mapStateToProps, mapDispatchToProps)(_HeaderWidget);
