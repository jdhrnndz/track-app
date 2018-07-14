import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { StyleProvider, Container, Content, Text, Button } from 'native-base';
import axios from 'axios';
import AppHeader from '../components/AppHeader';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

class RewardDetailsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reward: {},
    }
  }

  componentDidMount() {
    this.getRewardDetails();
  }

  getRewardDetails() {
    const itemId = this.props.navigation.getParam('id', '');

    axios.get(`https://progress-on-track.herokuapp.com/api/rewards/${itemId}`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ reward: data.results.reward });
        console.log(this.state.reward);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderReward() {
    const { reward } = this.state;

    return (
      <View style={{ flex: 0, flexDirection: 'column', alignItems: 'center' }}>
        <Image source={require("../assets/images/ticket.png")} style={{ width: '100%', height: 250 }} />
        <Text style={{ fontSize: 20 }}>{reward.name}</Text>
        <Text style={{ fontSize: 20 }}>{`${reward.value} points to avail`}</Text>
        <Text style={{ marginTop: 50 }}>Valid for 24 hours only.</Text>
      </View>
    );
  }

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle='Single Journey Ticket' leftIcon='arrow-back'
            leftAction={() => this.props.navigation.pop()} />
          <Content style={{ flex: 1 }}>
            {this.renderReward()}
          </Content>
          <Button block style={{ marginHorizontal: 20, marginVertical: 10 }}><Text>PURCHASE</Text></Button>
        </Container>
      </StyleProvider>
    );
  }
}

export default RewardDetailsContainer;