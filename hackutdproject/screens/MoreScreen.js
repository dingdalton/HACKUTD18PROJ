import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Button } from 'react-native-elements';
import styles from ".././styles/styles";

export default class MoreScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      elevation: 1,
      shadowOpacity: 1
    }
  };

    render() {
      return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>More things!</Text>
          <Button
            title="Go to Home"
            buttonStyle={styles.button}
            textStyle={styles.btnText}
            onPress={() => this.props.navigation.navigate('Home')}
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