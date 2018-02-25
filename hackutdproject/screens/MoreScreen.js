import React from 'react';
import { Text, View, SafeAreaView, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Button } from 'react-native-elements';
import styles from ".././styles/styles";


class MoreScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    headerStyle: {
      backgroundColor: 'orange',
      elevation: 0.4,
      shadowOpacity: 0.4
    }
  };

    render() {
      return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>Enter wallet address</Text>
          <TextInput
            style={{height: 25, width: 250, borderColor: 'black', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
      />
          </View>
      );
    }
  }

  export default MoreScreen;