import { Icon } from 'expo';
import React from 'react';
import { Dimensions, Platform } from 'react-native';
import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator, DrawerActions } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Sidebar from '../screens/sidebar';

const deviceWidth = Dimensions.get('window').width;

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: `Home`,
          headerLeft: (
            <Icon.Ionicons
              name="md-menu"
              size={30}
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}
            />
          ),
          headerStyle: {
            textAlign: 'center',
            alignContent: 'center'
          }
        };
      }
    }
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
  )
};

const LinksStack = createStackNavigator({
  Links: {
    screen: LinksScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: `Links`,
        headerLeft: (
          <Icon.Ionicons
            name="md-menu"
            size={30}
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
          />
        ),
        headerStyle: {
          textAlign: 'center',
          alignContent: 'center'
        }
      };
    }
  }
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
};

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: `app.json`,
        headerLeft: (
          <Icon.Ionicons
            name="md-menu"
            size={30}
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
          />
        ),
        headerStyle: {
          textAlign: 'center',
          alignContent: 'center'
        }
      };
    }
  }
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  )
};

export const TabNavigation = createBottomTabNavigator({
  Home: HomeStack,
  Links: LinksStack,
  Settings: SettingsStack
});

export const DrawerNavigation = createDrawerNavigator(
  {
    Home: HomeStack,
    Links: LinksStack,
    Settings: SettingsStack
  },
  {
    drawerWidth: deviceWidth - 50,
    drawerPosition: 'left'
    // contentComponent: props => <Sidebar {...props} />
  }
);

export const ComposedNavigation = createDrawerNavigator(
  {
    Bottom: TabNavigation
  },
  {
    drawerWidth: deviceWidth - 50,
    drawerPosition: 'left',
    contentComponent: props => <Sidebar {...props} />
  }
);

export default ComposedNavigation;
