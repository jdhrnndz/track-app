import React, { Component } from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createTabNavigator, createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import StationsStatus from './StationsStatus';
import Reports from './Reports';
import StationDetailsContainer from './StationDetailsContainer';
import ProfileContainer from './ProfileContainer';
import RewardsContainer from './RewardsContainer';
import RewardDetailsContainer from './RewardDetailsContainer';
import TicketStoresContainer from './TicketStoresContainer';
import ReportDetailsContainer from './ReportDetailsContainer';

const HomeStack = createStackNavigator(
  {
    StationsStatus: { screen: StationsStatus },
    StationDetails: { screen: StationDetailsContainer },
  }, {
    headerMode: 'none',
    initialRouteName: 'StationsStatus',
  }
);

const TicketStack = createStackNavigator(
  {
    TicketStores: { screen: TicketStoresContainer },
  }, {
    headerMode: 'none',
    initialRouteName: 'TicketStores',
  }
);

const ReportStack = createStackNavigator(
  {
    Reports: { screen: Reports },
    ReportDetailsContainer: { screen: ReportDetailsContainer },
  }, {
    headerMode: 'none',
    initialRouteName: 'Reports',
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: ProfileContainer },
    Rewards: { screen: RewardsContainer },
    RewardDetails: { screen: RewardDetailsContainer }
  }, {
    headerMode: 'none',
    initialRouteName: 'Profile',
  }
);


const HomeNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack, navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ }) => <Image
          source={require('../assets/images/nav_home.png')}
          style={{ height: 22, width: 22 }}
        />
      })
    },
    Ticket: {
      screen: TicketStack, navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ }) => <Image
          source={require('../assets/images/nav_ticket.png')}
          style={{ height: 22, width: 22 }}
        />
      })
    },
    Report: {
      screen: ReportStack, navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ }) => <Image
          source={require('../assets/images/nav_report.png')}
          style={{ height: 22, width: 18 }}
        />
      })
    },
    Profile: {
      screen: ProfileStack, navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ }) => <Image
          source={require('../assets/images/nav_profile.png')}
          style={{ height: 22, width: 20 }}
        />
      })
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    // swipeEnabled: true,
    // lazy: false,
    tabBarOptions: {
      activeBackgroundColor: '#ffffff',
      activeTintColor: '#FF9489',
      inactiveTintColor: '#b7b7b7',
      showIcon: true,
      style: {
        backgroundColor: '#ffffff',
      },
      indicatorStyle: {
        backgroundColor: '#FF857A',
      },
      labelStyle: {
        fontSize: 14,
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