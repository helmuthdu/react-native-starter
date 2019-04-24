import React from 'react';
import { Dimensions, Platform } from 'react-native';
import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Icon } from 'native-base';
import Sidebar from '../screens/sidebar';

const deviceWidth = Dimensions.get('window').width;

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {}
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
    />
  ),
  title: `Home`,
  headerLeft: ({ navigation }) => (
    <Icon
      name="md-menu"
      size={30}
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  ),
  headerStyle: {
    textAlign: 'center',
    alignContent: 'center'
  }
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />,
  title: `Home`,
  headerLeft: ({ navigation }) => (
    <Icon
      name="md-menu"
      size={30}
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  ),
  headerStyle: {
    textAlign: 'center',
    alignContent: 'center'
  }
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
  title: `Home`,
  headerLeft: ({ navigation }) => (
    <Icon
      name="md-menu"
      size={30}
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  ),
  headerStyle: {
    textAlign: 'center',
    alignContent: 'center'
  }
};

export const bottomNavigation = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});

export const drawerNavigation = createDrawerNavigator(
  {
    HomeStack,
    LinksStack,
    SettingsStack
  },
  {
    drawerWidth: deviceWidth - 50,
    drawerPosition: 'left',
    contentComponent: props => <Sidebar {...props} />
  }
);
