import React, { Component } from 'react';
import { StyleProvider, Container, Text, Content } from 'native-base';
import axios from 'axios';
import AppHeader from '../components/AppHeader';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
import RewardItem from '../components/RewardItem';

class RewardsContainer extends Component {
  constructor() {
    super();
    this.state = {
      rewards: [],
    }
  }

  componentDidMount() {
    this.getRewards();
  }

  getRewards() {
    axios.get('https://progress-on-track.herokuapp.com/api/rewards')
      .then((response) => response.data)
      .then((data) => {
        this.setState({ rewards: data.results.rewards });
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  renderRewards() {
    const { rewards } = this.state;

    return rewards.map((item, i) => {
      return (
        <RewardItem onPressAction={() => this.props.navigation.navigate('RewardDetails', { id: item.id })}
          key={i}
          rewardName={item.name}
          rewardValue={item.value} />

      );
    });
  }

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle='Rewards' leftIcon='arrow-back'
            leftAction={() => this.props.navigation.pop()} />
          <Content>
            {this.renderRewards()}
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default RewardsContainer;