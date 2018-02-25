import React from 'react';
import { Button, Text, View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { StackNavigator, TabNavigator, TabBarBottom, NavigationActions } from 'react-navigation'; // 1.0.0-beta.27

//import screens
import HomeScreen from "./screens/HomeScreen";
import MoreScreen from "./screens/MoreScreen";
import DetailsScreen from "./screens/DetailsScreen";

const fade = (props) => {
  const {position, scene} = props

  const index = scene.index

  const translateX = 0
  const translateY = 0

  const opacity = position.interpolate({
      inputRange: [index - 0.7, index, index + 0.7],
      outputRange: [0.3, 1, 0.3]
  })

  return {
      opacity,
      transform: [{translateX}, {translateY}]
  }
}

const HomeStack = StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
},
{
  transitionConfig: () => ({
      screenInterpolator: (props) => {
          return fade(props)
      }
  })
}
);

const MoreStack = StackNavigator({
  More: { screen: MoreScreen },
  Details: { screen: DetailsScreen },
  
},
{
  transitionConfig: () => ({
      screenInterpolator: (props) => {
          return fade(props)
      }
  })
}
);

const navigateOnce = (getStateForAction) => (action, state) => {
  const {type, routeName} = action;
  return (
    state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
  ) ? null : getStateForAction(action, state);
  // you might want to replace 'null' with 'state' if you're using redux (see comments below)
};

//ADD FOR EVERY NEW STACKNAVIGATOR
// Prevents multiple pages opening at once

HomeStack.router.getStateForAction = navigateOnce(HomeStack.router.getStateForAction);
MoreStack.router.getStateForAction = navigateOnce(MoreStack.router.getStateForAction);

////********* */

const AppContent = TabNavigator(
  {
    Home: { screen: HomeStack },
    More: { screen: MoreStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-cash${focused ? '' : '-outline'}`;
        } else if (routeName === 'More') {
          iconName = `ios-more${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        borderTopColor: "transparent",
        backgroundColor: 'white',
        elevation: 1,
        shadowOpacity: 0.1,
      },
      activeTintColor: '#000000',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default App = () =>

  <View style={{flex: 1}}>
    <StatusBar translucent = {true} backgroundColor="#ffffff" barStyle="dark-content"/> 
   <AppContent />
 </View>;