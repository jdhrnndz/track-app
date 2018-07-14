import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { StyleProvider, Container, Content, Text, Button } from 'native-base';
import AppHeader from '../components/AppHeader';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

class RewardDetailsContainer extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle='Single Journey Ticket' leftIcon='arrow-back'
            leftAction={() => this.props.navigation.pop()} />
          <Content style={{ flex: 1 }}>
            <View style={{ flex: 0, flexDirection: 'column', alignItems: 'center' }}>
              <Image source={require("../assets/images/ticket.png")} style={{ width: '100%', height: 250 }} />
              <Text style={{ fontSize: 20 }}>Single Journey Ticket</Text>
              <Text style={{ fontSize: 20 }}>100 points to avail</Text>
              <Text style={{ marginTop: 50 }}>Valid for 24 hours only.</Text>
            </View>
          </Content>
          <Button block style={{ marginHorizontal: 20, marginVertical: 10 }}><Text>PURCHASE</Text></Button>
        </Container>
      </StyleProvider>
    );
  }
}

export default RewardDetailsContainer;