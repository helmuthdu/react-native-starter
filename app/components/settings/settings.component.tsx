import { ExpoConfigView } from '@expo/samples';
import { Body, Button, Container, Content, Header, Icon, Left, Right, Title } from 'native-base';
import React from 'react';
import { styles } from './settings.style';

type Props = {
  navigation: any;
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
