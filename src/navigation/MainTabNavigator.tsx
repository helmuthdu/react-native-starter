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

export const TabNavigation = createBottomTabNavigator(
  {
    Home: HomeStack,
    Links: LinksStack,
    Settings: SettingsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle';
            break;
          case 'Links':
            iconName = Platform.OS === 'ios' ? 'ios-link' : 'md-link';
            break;
          case 'Settings':
            iconName = Platform.OS === 'ios' ? 'ios-options' : 'md-options';
            break;
        }
        return <TabBarIcon name={iconName} focused={focused} />;
      }
    })
  }
);

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
