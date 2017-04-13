import React, {ReactElement} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import {filters, ITruck, IFilters, EFilter} from "../../types/entites";
import {IFilterAction} from "../../types/redux";
import {setFilter} from "../../actions/filters";
import {connect} from "react-redux";

interface IProps {
  filter?: IFilters,
  setFilter?: (filter: IFilters) => void,
  trucks?: ITruck[]
}

const filtring = {
  [EFilter.NONE]: (trucks: ITruck[]) => trucks.length,
  [EFilter.ACTIVE]: (trucks: ITruck[]) => trucks.filter(truck => truck.active).length,
  [EFilter.INACTIVE]: (trucks: ITruck[]) => trucks.filter(truck => !truck.active).length,
};

export const _HeaderWidget = ({filter, setFilter, trucks}: IProps): ReactElement<IProps> => {

  const nextFilterIndex = filters.indexOf(filter) + 1;
  const nextFilter = nextFilterIndex >= filters.length ? filters[0] : filters[nextFilterIndex];

  let amountOfTrucks = filtring[nextFilterIndex - 1](trucks);

  return (
    <TouchableOpacity
      style={globalStyles.widget}
      onPress={() => setFilter(nextFilter as IFilters)}>
      <Text style={globalStyles.title}>{`${amountOfTrucks} ${filter !== filters[0] ? filters[nextFilterIndex - 1] : 'trucks'}`}</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = ({trucks, filter}: {trucks: ITruck[], filter: IFilters}) => ({
  trucks, filter,
});

const mapDispatchToProps = (dispatch: (action: IFilterAction) => void) => ({
  setFilter: (filter: IFilters) => dispatch(setFilter(filter)),
});

export const HeaderWidget = connect(mapStateToProps, mapDispatchToProps)(_HeaderWidget);
