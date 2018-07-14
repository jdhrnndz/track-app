import React, { Component } from 'react';
import { StyleProvider, Container, Text, View, Content } from 'native-base';
import AppHeader from '../components/AppHeader';
import StationOverviewCard from '../components/StationOverviewCard';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

class StationsStatus extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle='LRT Stations Status' />
          <View style={{ backgroundColor: 'white', paddingBottom: 12 }}>
            <Text style={{ textAlign: 'center' }}>Number of Operational Trains: 15/20</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Content>
              <StationOverviewCard navigation={this.props.navigation} name="Doroteo Jose" status={{
                southbound: 'LIGHT',
                northbound: 'HEAVY',
              }} />
              <StationOverviewCard navigation={this.props.navigation} name="Carriedo" status={{
                southbound: 'MODERATE',
                northbound: 'LIGHT',
              }} />
              <StationOverviewCard navigation={this.props.navigation} name="Central Terminal" status={{
                southbound: 'MODERATE',
                northbound: 'HEAVY',
              }} />
            </Content>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}

export default StationsStatus;