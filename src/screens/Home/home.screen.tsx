import React from 'react';
import { Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title } from 'native-base';

import styles from './styles';
import { DrawerActions } from 'react-navigation';

export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon active name="menu" onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            {this.props.list.map((item, i) => (
              <ListItem
                key={i}
                onPress={() =>
                  this.props.navigation.navigate('BlankPage', {
                    name: { item }
                  })
                }>
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Home;
