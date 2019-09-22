import { WebBrowser } from 'expo';
import { Body, Button, Container, Content, Header, Icon, Left, ListItem, Right, Text, Title } from 'native-base';
import React, { Component } from 'react';
import { FlatList, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { MonoText } from '../styled-text/styled-text.component';
import { styles } from './home.style';

export interface Props {
  navigation: NavigationScreenProp<NavigationRoute>;
  list: string[];
}
class Home extends Component<Props> {
  public render() {
    const { navigation, list } = this.props;
    return (
      <Container>
        {this.props.navigation.openDrawer && (
          <Header>
            <Left>
              <Button transparent>
                <Icon active name="menu" onPress={() => navigation.openDrawer()} />
              </Button>
            </Left>
            <Body>
              <Title>Home</Title>
            </Body>
            <Right />
          </Header>
        )}
        <Content>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
              <Image
                source={
                  __DEV__
                    ? require('../../../assets/images/robot-dev.png')
                    : require('../../../assets/images/robot-prod.png')
                }
                style={styles.welcomeImage}
              />
            </View>

            <View style={styles.getStartedContainer}>
              {this._maybeRenderDevelopmentModeWarning()}

              <Text style={styles.getStartedText}>Get started by opening</Text>

              <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
                <MonoText style={styles.codeHighlightText}>screens/home/home.screen.tsx</MonoText>
              </View>

              <Text style={styles.getStartedText}>Change this text and your app will automatically reload.</Text>
            </View>

            <View style={styles.helpContainer}>
              <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
                <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.linksContainer}>
              <FlatList
                data={list}
                keyExtractor={item => item}
                renderItem={({ item, index }) => (
                  <ListItem
                    key={index}
                    onPress={() =>
                      this.props.navigation.navigate('BlankPage', {
                        name: { item }
                      })
                    }>
                    <Text>{item}</Text>
                  </ListItem>
                )}
              />
            </View>

            <View style={styles.tabBarInfoContainer}>
              <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

              <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                <MonoText style={styles.codeHighlightText}>screens/index.tsx</MonoText>
              </View>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }

  private _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development tools.{' '}
          {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  private _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  private _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

export default Home;
