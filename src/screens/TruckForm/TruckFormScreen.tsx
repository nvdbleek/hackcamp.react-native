import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {Button} from '../../components/Button';
import {globalStyles} from '../../styles/globalStyles';
import {Banner} from '../../components/Banner';
import {ITruck} from '../../types/entites';

interface IState {
  name?: string,
}

interface IProps {
  switchScreens: () => void,
  addTruck: (truck: ITruck) => void,
}

const styles = StyleSheet.create({
  button: {
    margin: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  }
});

export class TruckFormScreen extends Component<IProps, IState> {
  state = {
    name: ''
  };

  update = (text: string, name: string) => {
    this.setState({[name]: text} as IState);
  };

  render() {
    return (
      <View style={globalStyles.container}>
        <Banner />
        <View style={{flex: 3, padding: 5}}>
          <Text>Choose a name for your truck</Text>
          <TextInput
            placeholder="truck name"
            value={this.state.value}
            onChangeText={text => this.update(text, "name")} />
          <Button
            style={styles.button}
            onPress={() => {
              if (!this.state.name.trim()) {
                return;
              }
              // TODO You need to add the new truck to the list here ....
              // Hint: I think the Main component has something that could help us here ...
              this.props.switchScreens();
            }}>
            <Text style={styles.buttonText}>Add</Text>
          </Button>
        </View>
        <View style={{flex: 7}} />
      </View>
    )
  }
}
