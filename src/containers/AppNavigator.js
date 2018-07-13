import React, { Component } from 'react';
import { createStackNavigator, createTabNavigator, createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import StationsStatus from './StationsStatus';
import Profile from './Profile';
import Notifications from './Notifications';

const HomeStack = createStackNavigator(
  {
    StationsStatus: { screen: StationsStatus },
  }, {
    headerMode: 'none',
    initialRouteName: 'StationsStatus',
  }
);

const ImageStack = createStackNavigator(
  {
    StationsStatus: { screen: StationsStatus },
  }, {
    headerMode: 'none',
    initialRouteName: 'StationsStatus',
  }
);

const NotifsStack = createStackNavigator(
  {
    Notifs: { screen: Notifications },
  }, {
    headerMode: 'none',
    initialRouteName: 'Notifs',
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: Profile },
  }, {
    headerMode: 'none',
    initialRouteName: 'Profile',
  }
);


const HomeNavigator = createBottomTabNavigator(
  {
    // Deals: {
    //   screen: DealsStack, navigationOptions: ({ navigation }) => ({
    //     tabBarIcon: ({ }) => <Image
    //       source={require('../assets/images/icn_deals.png')}
    //       style={{ height: 22, width: 22 }}
    //     />
    //   })
    // }
    Home: {
      screen: HomeStack
    },
    Image: {
      screen: ImageStack
    },
    Notifs: {
      screen: NotifsStack
    },
    Profile: {
      screen: ProfileStack
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    // swipeEnabled: true,
    // lazy: false,
    tabBarOptions: {
      activeBackgroundColor: '#ffffff',
      activeTintColor: '#000000',
      inactiveTintColor: '#b7b7b7',
      showIcon: true,
      style: {
        backgroundColor: '#ffffff',
      },
      indicatorStyle: {
        backgroundColor: '#FF857A',
      },
      labelStyle: {
        fontSize: 12,
      }
    },
    // navigationOptions: {
    //   tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
    //     //console.log('route: ' + previousScene.route.index);
    //     jumpToIndex(scene.index);
    //   }
    // }
  }
);

class AppNavigator extends Component {
  render() {
    return <HomeNavigator />
  }
}

export default AppNavigator;