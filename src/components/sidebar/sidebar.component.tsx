import React from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';

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
      <List
        style={{ marginTop: 40 }}
        dataArray={routes}
        renderRow={data => {
          return (
            <ListItem button onPress={() => props.navigation.navigate(data.route)}>
              <Text>{data.caption}</Text>
            </ListItem>
          );
        }}
      />
    </Content>
  </Container>
);

export default Sidebar;
