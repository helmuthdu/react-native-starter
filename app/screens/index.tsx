import React from 'react';
import { Dimensions, Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator, NavigationScreenConfigProps } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { TabBarIcon } from '../components/tab-bar-icon/tab-bar-icon.component';
import BlankPage from './blank-page/blank-page.screen';

import HomeScreen from './home/home.screen';
import LinksScreen from './links/links.screen';
import SettingsScreen from './settings/settings.screen';
import Sidebar from './sidebar/sidebar.screen';

const deviceWidth = Dimensions.get('window').width;

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    BlankPage: BlankPage
  },
  {
    headerMode: 'none'
  }
);

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  {
    headerMode: 'none'
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  {
    headerMode: 'none'
  }
);

export const TabNavigation = createBottomTabNavigator(
  {
    Home: HomeStack,
    Links: LinksStack,
    Settings: SettingsStack
  },
  {
    defaultNavigationOptions: ({ navigation }: NavigationScreenConfigProps) => ({
      tabBarIcon({ focused }: any) {
        const { routeName } = navigation.state;
        let iconName = '';
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
  }
);

export const ComposedNavigation = createDrawerNavigator(
  {
    Tabs: TabNavigation
  },
  {
    drawerWidth: deviceWidth - 50,
    drawerPosition: 'left',
    contentComponent(props: object) {
      return <Sidebar {...(props as any)} />;
    }
  }
);

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    App: ComposedNavigation
  })
);
