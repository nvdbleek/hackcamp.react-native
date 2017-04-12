import React, {ReactElement} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import {EFilter, filters, IFilters, ITruck} from '../../types/entites';

interface IProps {
  filter: IFilters,
  setFilter: (filter: IFilters) => void,
  trucks: ITruck[]
}

const filtering = {
  [EFilter.NONE]: (trucks: ITruck[]) => trucks.length,
  [EFilter.ACTIVE]: (trucks: ITruck[]) => trucks.filter(truck => truck.active).length,
  [EFilter.INACTIVE]: (trucks: ITruck[]) => trucks.filter(truck => !truck.active).length,
};

export const HeaderWidget = ({filter, setFilter, trucks}: IProps): ReactElement<IProps> => {
  const nextFilterIndex = filters.indexOf(filter) + 1;
  const nextFilter = nextFilterIndex >= filters.length ? filters[0] : filters[nextFilterIndex];

  let amountOfTrucks = filtering[nextFilterIndex - 1](trucks);

  return (
    <TouchableOpacity
      style={globalStyles.widget}
      onPress={setFilter(nextFilter as IFilters)}
    >
      <Text style={globalStyles.title}>{`${amountOfTrucks} ${filter !== filters[0] ?
        filters[nextFilterIndex - 1] :
        'trucks'}`}</Text>
    </TouchableOpacity>
  );
};
