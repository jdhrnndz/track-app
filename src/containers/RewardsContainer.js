import React, { Component } from 'react';
import { StyleProvider, Container, Text, Content } from 'native-base';
import AppHeader from '../components/AppHeader';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
import RewardItem from '../components/RewardItem';

class RewardsContainer extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle='Rewards' leftIcon='arrow-back'
            leftAction={() => this.props.navigation.pop()} />
          <Content>
            <RewardItem onPressAction={() => this.props.navigation.navigate('RewardDetails')} />
            <RewardItem onPressAction={() => this.props.navigation.navigate('RewardDetails')} />
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default RewardsContainer;