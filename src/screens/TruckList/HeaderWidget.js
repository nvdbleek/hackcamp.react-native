import React, {ReactElement} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import {filters, filtersStrings} from "../../constants/filters";

const filtering = {
  [filters.NONE]: (trucks) => trucks.length,
  [filters.ACTIVE]: (trucks) => trucks.filter(truck => truck.active).length,
  [filters.INACTIVE]: (trucks) => trucks.filter(truck => !truck.active).length,
};

export const HeaderWidget = ({filter, setFilter, trucks}) => {

  const nextFilter = filter + 1 % Object.keys(filters).length;
  let amountOfTrucks = filtering[nextFilter - 1](trucks);

  return (
    <TouchableOpacity
      style={globalStyles.widget}
      onPress={() => setFilter(nextFilter)}
    >
      <Text style={globalStyles.title}>{`${amountOfTrucks} ${filter !== filters.NONE ?
        filtersStrings[filter] :
        'trucks'}`}</Text>
    </TouchableOpacity>
  );
};
