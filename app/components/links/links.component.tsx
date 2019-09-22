import * as Samples from '@expo/samples';
import { Body, Button, Container, Content, Header, Icon, Left, Right, Title } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { styles } from './links.style';

export const Links = (props: { navigation: NavigationScreenProp<NavigationRoute> }) => (
  <Container style={styles.container}>
    {props.navigation.openDrawer && (
      <Header>
        <Left>
          <Button transparent>
            <Icon active name="menu" onPress={() => props.navigation.openDrawer()} />
          </Button>
        </Left>
        <Body>
          <Title>Links</Title>
        </Body>
        <Right />
      </Header>
    )}
    <Content>
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <Samples.ExpoLinksView />
      </ScrollView>
    </Content>
  </Container>
);
