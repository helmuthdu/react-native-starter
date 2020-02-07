import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, Platform } from 'react-native';

import { TabBarIcon } from '../components/tab-bar-icon/tab-bar-icon.component';

import HomeScreen from './home/home.screen';
import LinksScreen from './links/links.screen';
import SettingsScreen from './settings/settings.screen';

const deviceWidth = Dimensions.get('window').width;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen
        name="Home"
        component={RootNavigator}
        options={({ navigation, route }) => ({
          headerShown: false
        })}
      />
      <Stack.Screen
        name="Links"
        component={RootNavigator}
        options={({ navigation, route }) => ({
          headerShown: false
        })}
      />
      <Stack.Screen
        name="Settings"
        component={RootNavigator}
        options={({ navigation, route }) => ({
          headerShown: false
        })}
      />
    </Stack.Navigator>
  );
}

function RootDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerStyle={{ width: deviceWidth - 50 }}>
      <Drawer.Screen name="Home" component={RootStack} />
      <Drawer.Screen name="Links" component={RootStack} />
      <Drawer.Screen name="Settings" component={RootStack} />
    </Drawer.Navigator>
  );
}

function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
          let iconName = '';
          switch (route.name) {
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
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Links" component={LinksScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const AppNavigator = () => (
  <NavigationContainer>
    <RootDrawer />
  </NavigationContainer>
);

export default AppNavigator;
