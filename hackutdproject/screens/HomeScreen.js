import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Button } from 'react-native-elements';
import styles from ".././styles/styles";

export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
        backgroundColor: 'white',
        elevation: 0.4,
        shadowOpacity: 0.4
    }
  };
      
    render() {
      return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text}>Home!</Text>
          <Button
            title="Go to More"
            buttonStyle={styles.button}
            textStyle={styles.btnText}
            onPress={() => this.props.navigation.navigate('More')}
          />
          <Button
            title="Go to Details"
            buttonStyle={styles.button}
            textStyle={styles.btnText}
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
  }