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
    this.getStationsStatus();
  }

  getTrainStatus() {
    axios.get('https://progress-on-track.herokuapp.com/api/trains/status')
      .then((response) => response.data.results)
      .then((data) => {
        const { status } = data;

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
    axios.get('https://progress-on-track.herokuapp.com/api/stations/status')
    .then((response) => response.data.results)
    .then((data) => {
      const statuses = data.statuses;

      const southbound = statuses.slice(0).filter((status1) => status1["Station"]["flow"] === "SOUTH");
      const northbound = statuses.slice(0).filter((status2) => status2["Station"]["flow"] === "NORTH");
      const newStatus = [];

      southbound.map((station) => {
        const currentName = station.Station.name;

        const indexOfPartner = northbound.findIndex((partner) => {
          return partner.Station.name === currentName;
        });

        newStatus.push({
          name: station.Station.title,
          title: station.Station.name,
          status: {
            southbound: station.status,
            northbound: indexOfPartner >= 0 ? northbound[indexOfPartner].status : '',
          },
        });
      });

      this.setState({
        stationStatus: newStatus,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const cards = this.state.stationStatus.map((stationStatus, index) => { console.log(stationStatus); return (
      <StationOverviewCard
        key={index}
        navigation={this.props.navigation}
        name={stationStatus.name}
        title={stationStatus.title}
        status={stationStatus.status} />
    )});

    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle='LRT Stations Status' />
          <View style={{ backgroundColor: 'white', paddingBottom: 12 }}>
            <Text style={{ textAlign: 'center' }}>Number of Operational Trains: {this.state.operationalTrainCount && this.state.totalTrainCount ? `${this.state.operationalTrainCount}/${this.state.totalTrainCount}` : '----'}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Content>
              {cards}
            </Content>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}

export default StationsStatus;