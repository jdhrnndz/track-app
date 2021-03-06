import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView } from 'react-native';
import { StyleProvider, Container, Content, Text, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import PopupDialog from 'react-native-popup-dialog';
import axios from 'axios';

import AppHeader from '../components/AppHeader';
import StationNextStatus from '../components/StationNextStatus';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
import StationActivity from '../components/StationActivity';

class StationDetailsContainer extends Component {
  constructor() {
    super();
    this.popupDialog = {};
    this.successDialog = {};
    this.state = {
      stationNorth: {},
      stationSouth: {},
      successData: {},
      postDescription: '',
    }
  }

  componentDidMount() {
    this.getStationNorthDetails();
    this.getStationSouthDetails();
  }

  getStationNorthDetails() {
    const itemId = this.props.navigation.getParam('id', '');

    axios.get(`https://progress-on-track.herokuapp.com/api/stations/${itemId}_NORTH`)
      .then((response) => response.data.results)
      .then((data) => {
        this.setState({ stationNorth: data.station });
        console.log(this.state.stationNorth);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getStationSouthDetails() {
    const itemId = this.props.navigation.getParam('id', '');

    axios.get(`https://progress-on-track.herokuapp.com/api/stations/${itemId}_SOUTH`)
      .then((response) => response.data.results)
      .then((data) => {
        this.setState({ stationSouth: data.station });
        console.log(this.state.stationSouth);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  createPost() {
    const itemId = this.props.navigation.getParam('id', '');

    axios.post('https://progress-on-track.herokuapp.com/api/posts', {
      description: `${this.state.postDescription}`,
      stationId: `${itemId}_NORTH`,
      status: 'LIGHT',
      userId: 'levincalado',
    })
      .then((response) => response.data.results
      )
      .then((data) => {
        console.log(data);
        this.setState({ successData: data.post });
        this.showSuccessDialog();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  showPopupDialog() {
    this.popupDialog.show();
  }

  closePopupDialog() {
    this.popupDialog.dismiss();
  }

  showSuccessDialog() {
    this.popupDialog.dismiss();
    this.successDialog.show();
  }

  renderPopup() {
    const { postDescription } = this.state;

    return (<PopupDialog
      ref={(popupDialog) => { this.popupDialog = popupDialog; }}
      dialogStyle={{ marginTop: -120 }}
      width={0.8}
      height={0.7}>
      <View style={styles.popupContainer}>
        <Icon name="close" style={{ alignSelf: 'flex-end' }} onPress={() => this.closePopupDialog()} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', color: '#18233F' }}>UN Avenue</Text>
        <Grid style={{ flex: 0 }}>
          <Col>
            <Button block style={{ marginHorizontal: 5, height: 40 }}><Text>Northbound</Text></Button>
          </Col>
          <Col>
            <Button bordered block style={{ marginHorizontal: 5, height: 40 }}><Text>Southbound</Text></Button>
          </Col>
        </Grid>
        <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginTop: 10, color: '#18233F' }}>Passenger Volume</Text>
        <Button block style={styles.statusBtn}><Text>Light</Text></Button>
        <Button bordered block style={styles.statusBtn}><Text>Moderate</Text></Button>
        <Button bordered block style={styles.statusBtn}><Text>Heavy</Text></Button>
        <TextInput
          style={styles.messageInput}
          placeholder="Type a message"
          value={postDescription} onChangeText={(text) => { this.setState({ postDescription: text }); }}
        />
        <Button block style={styles.postDialogBtn} onPress={() => { this.createPost() }} ><Text>POST</Text></Button>
      </View>
    </PopupDialog>);
  }

  renderSuccessPopup() {
    return (<PopupDialog
      ref={(successDialog) => { this.successDialog = successDialog; }}
      width={0.8}
      height={0.30}>
      <View style={styles.popupContainer}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', color: '#13AC35' }}>10 Points</Text>
        <Text style={{ alignSelf: 'center', color: '#18233F' }}>Thank you for helping our community!</Text>
        <Text style={{ fontWeight: 'bold', alignSelf: 'center', color: '#18233F' }}>{this.state.successData.stationId}</Text>
        <Text style={{ fontWeight: 'bold', alignSelf: 'center', color: '#18233F' }}>{this.state.successData.status}</Text>
        <Button block style={styles.postDialogBtn} onPress={() => this.successDialog.dismiss()} ><Text>OKAY</Text></Button>
      </View>
    </PopupDialog>);
  }

  renderNorth() {
    return (
      <StationNextStatus
        currentStep={0}
        stations={[this.state.stationNorth.destinationId, this.state.stationNorth.title]} />
    );
  }

  renderSouth() {
    return (
      <StationNextStatus
        currentStep={1}
        stations={[this.state.stationSouth.title, this.state.stationSouth.destinationId]} />
    );
  }

  render() {
    const itemId = this.props.navigation.getParam('id', '');
    const thumbnail = this.props.navigation.getParam('thumbnail', '');

    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle={this.state.stationNorth.title}
            leftIcon='arrow-back'
            leftAction={() => this.props.navigation.pop()} />
          {this.renderPopup()}
          {this.renderSuccessPopup()}
          <View style={{ flex: 1 }}>
            <Content>
              <Text style={styles.h2}>Northbound</Text>
              {this.renderNorth()}
              <Text style={styles.h2}>Southbound</Text>
              {this.renderSouth()}
              <Text style={styles.h2}></Text>
              <StationActivity stationId={itemId} />
            </Content>
          </View>
          <View style={{ height: 50, backgroundColor: '#B5E9E5', paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'center' }}>
            <Button block style={styles.postBtn} onPress={() => this.showPopupDialog()}><Text>Post An Activity</Text></Button>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = {
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#18233F',
    marginLeft: 16,
    marginTop: 5,
    marginBottom: 5,
  },
  postBtn: {
    backgroundColor: '#009D93',
    width: '100%',
    height: 30,
    alignSelf: 'center'
  },
  popupContainer: {
    padding: 10,
    flexDirection: 'column',
  },
  statusBtn: {
    marginHorizontal: 20,
    marginVertical: 5,
    height: 30,
  },
  messageInput: {
    borderColor: '#C4C4C4',
    height: 60,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 10
  },
  postDialogBtn: {
    marginTop: 20
  }

};

export default StationDetailsContainer;