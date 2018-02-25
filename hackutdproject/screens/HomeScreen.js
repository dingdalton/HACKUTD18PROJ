import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Button, List, ListItem } from 'react-native-elements';
import styles from ".././styles/styles";

export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Group Pay',
    headerStyle: {
        backgroundColor: 'orange',
        elevation: 0.4,
        shadowOpacity: 0.4
    }
  };
      
    render() {
      return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text}>Enter wallet address</Text>
            <TextInput
              style={{height: 25, width: 250, borderColor: 'black', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
            />
          <Button
            title="Send Payment"
            buttonStyle={styles.button}
            textStyle={styles.btnText}
            onPress={() => this.props.navigation.navigate('Details')}
            
          />
        </View>
      );
    }
  }