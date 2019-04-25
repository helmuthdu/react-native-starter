import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { Body, Button, Container, Content, Header, Icon, Left, Right, Title } from 'native-base';
import { styles } from './settings.component.styl';

type Props = {
  navigation: NavigationScreenProp<NavigationRoute>;
};

export const Settings = (props: Props) => (
  <Container style={styles.container}>
    {props.navigation.openDrawer && (
      <Header>
        <Left>
          <Button transparent>
            <Icon active name="menu" onPress={() => props.navigation.openDrawer()} />
          </Button>
        </Left>
        <Body>
          <Title>app.json</Title>
        </Body>
        <Right />
      </Header>
    )}
    <Content>
      <ExpoConfigView />
    </Content>
  </Container>
);
