import React, { Component } from 'react';
import { StyleProvider, Container, Text, View, Content } from 'native-base';
import AppHeader from '../components/AppHeader';
import StationOverviewCard from '../components/StationOverviewCard';
import axios from 'axios';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

class StationsStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operationalTrainCount: null,
      totalTrainCount: null,
      stationStatus: [],
    };

    this.getTrainStatus();
  }

  getTrainStatus() {
    axios.get('https://progress-on-track.herokuapp.com/api/trains/status')
      .then((response) => {
        const { status } = response.data.results;

        const brokenTrainCount = parseInt(status[status.findIndex((element) => (element.status === "NON-OPERATIONAL"))].total);
        const operationalTrainCount = parseInt(status[status.findIndex((element) => (element.status === "OPERATIONAL"))].total);

        this.setState({
          totalTrainCount: brokenTrainCount + operationalTrainCount,
          operationalTrainCount,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getStationsStatus() {
    axios.get('')
  }

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle='LRT Stations Status' />
          <View style={{ backgroundColor: 'white', paddingBottom: 12 }}>
            <Text style={{ textAlign: 'center' }}>Number of Operational Trains: {this.state.operationalTrainCount && this.state.totalTrainCount ? `${this.state.operationalTrainCount}/${this.state.totalTrainCount}` : '----'}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Content>
              <StationOverviewCard navigation={this.props.navigation}
                name="Doroteo Jose"
                title="DOROTEO_JOSE"
                status={{
                  southbound: 'LIGHT',
                  northbound: 'HEAVY',
                }} />
              <StationOverviewCard navigation={this.props.navigation}
                name="Carriedo"
                title="CARRIEDO"
                status={{
                  southbound: 'MODERATE',
                  northbound: 'LIGHT',
                }} />
              <StationOverviewCard navigation={this.props.navigation}
                name="Central Terminal"
                title="CENTRAL_TERMINAL"
                status={{
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