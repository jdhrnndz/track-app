import React, { Component } from 'react';
import { createStackNavigator, createTabNavigator, TabBarBottom } from 'react-navigation';
import StationsStatus from './StationsStatus';

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
    StationsStatus: { screen: StationsStatus },
  }, {
    headerMode: 'none',
    initialRouteName: 'StationsStatus',
  }
);

const ProfileStack = createStackNavigator(
  {
    StationsStatus: { screen: StationsStatus },
  }, {
    headerMode: 'none',
    initialRouteName: 'StationsStatus',
  }
);


const HomeNavigator = createTabNavigator(
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
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    lazy: false,
    tabBarOptions: {
      activeBackgroundColor: '#ffffff',
      activeTintColor: '#000000',
      inactiveTintColor: '#000000',
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
    navigationOptions: {
      tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
        //console.log('route: ' + previousScene.route.index);
        jumpToIndex(scene.index);
      }
    }
  }
);

class AppNavigator extends Component {
  render() {
    return <HomeNavigator />
  }
}

export default AppNavigator;