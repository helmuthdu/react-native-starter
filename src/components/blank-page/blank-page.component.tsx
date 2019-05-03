import React from 'react';
import { Body, Button, Container, Content, Header, Icon, Left, Right, Text, Title } from 'native-base';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';

import { styles } from './blank-page.style';

export interface Props {
  navigation: NavigationScreenProp<NavigationRoute>;
}

const BlankPage = (props: Props) => {
  const param = props.navigation.state.params;
  return (
    <Container style={styles.container}>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="ios-arrow-back" />
          </Button>
        </Left>

        <Body style={{ flex: 3 }}>
          <Title>{param ? param.name.item : 'Blank Page'}</Title>
        </Body>

        <Right />
      </Header>

      <Content padder>
        <Text>{param !== undefined ? param.name.item : 'Create Something Awesome . . .'}</Text>
      </Content>
    </Container>
  );
};

export default BlankPage;
