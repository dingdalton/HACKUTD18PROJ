import React from 'react';
import { Button, Text, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

export default class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      elevation: 0.4,
      shadowOpacity: 0.4
    }
  };

    render() {
      return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details!</Text>
        </View>
      );
    }
  }