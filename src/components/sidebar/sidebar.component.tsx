import React from 'react';
import { Container, Content, ListItem, Text } from 'native-base';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { FlatList } from 'react-native';

const routes = [
  {
    route: 'Home',
    caption: 'Home'
  },
  {
    route: 'Links',
    caption: 'Links'
  },
  {
    route: 'Settings',
    caption: 'Settings'
  }
];

export interface Props {
  navigation: NavigationScreenProp<NavigationRoute>;
}

export const Sidebar = (props: Props) => (
  <Container>
    <Content>
      <FlatList
        style={{ marginTop: 40 }}
        data={routes}
        keyExtractor={item => item.route}
        renderItem={({ item, index }) => (
          <ListItem button onPress={() => props.navigation.navigate(item.route)}>
            <Text>{item.caption}</Text>
          </ListItem>
        )}
      />
    </Content>
  </Container>
);

export default Sidebar;
