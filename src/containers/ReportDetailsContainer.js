import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import { StyleProvider, Container, Text, Button, View, Thumbnail, Picker, Icon, Form, Textarea } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Keyboard, TouchableOpacity, ScrollView } from "react-native";
import axios from 'axios';
import PopupDialog from 'react-native-popup-dialog';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

class ReportDetailsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      station: 'Doroteo Jose',
      specifics: null,
      description: null,
      response: null,
    }
  }

  sendReport(category, station, specifics, description) {
    Keyboard.dismiss();
    axios.post('https://progress-on-track.herokuapp.com/api/reports', {
      station,
      category,
      specifics,
      description,
    })
    .then((response) => response.data.results)
    .then((data) => {
      this.setState({ response: data })
      this.showSuccessDialog();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getButtonStyle(specifics) {
    let backgroundColor;
    if (specifics === this.state.specifics) {
      backgroundColor = '#1c9d93';
    }

    return {
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor,
    }
  }

  showSuccessDialog() {
    this.successDialog.show();
  }

  renderSuccessPopup() {
    const category = this.props.navigation.getParam('category', '');

    return (<PopupDialog
      ref={(successDialog) => { this.successDialog = successDialog; }}
      width={0.8}
      height={0.45}>
      <View style={styles.popupContainer}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', color: '#13AC35' }}>{this.state.response ? this.state.response.pointsEarned : 0 } Points</Text>
        <Text style={{ alignSelf: 'center', color: '#18233F', textAlign: 'center' }}>{this.state.response ? this.state.response.message : ''}</Text>
        <Text style={{ fontWeight: 'bold', alignSelf: 'center', color: '#18233F' }}>{this.state.station}</Text>
        <Text style={{ fontWeight: 'bold', alignSelf: 'center', color: '#18233F' }}>{this.state.specifics}</Text>
        <Text style={{ fontWeight: 'bold', alignSelf: 'center', color: '#18233F' }}>{category}</Text>
        <Text style={{ alignSelf: 'center', color: 'gray' }}>{this.state.description}</Text>
        <Button block style={styles.postDialogBtn} onPress={() => this.successDialog.dismiss()} ><Text>OKAY</Text></Button>
      </View>
    </PopupDialog>);
  }

  render() {
    const category = this.props.navigation.getParam('category', '');
    const thumbnail = this.props.navigation.getParam('thumbnail', '');
    
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle={category}
            leftIcon='arrow-back'
            leftAction={() => this.props.navigation.pop()}/>
          {this.renderSuccessPopup()}
          <ScrollView style={{ width: '100%', height: '100%', margin: 0, padding: 0}}>
            <Grid>
              <Row size={1}>
                <Picker
                  mode="dialog"
                  prompt="Choose a station"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  placeholder="Choose a station"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.station}
                  onValueChange={(itemValue) => this.setState({ station: itemValue })}
                >
                  <Picker.Item label="Roosevelt" value="Roosevelt" />
                  <Picker.Item label="Balintawak" value="Balintawak" />
                  <Picker.Item label="Monumento" value="Monumento" />
                  <Picker.Item label="5th Avenue" value="5th Avenue" />
                  <Picker.Item label="R. Papa" value="R. Papa" />
                  <Picker.Item label="Abad Santos" value="Abad Santos" />
                  <Picker.Item label="Blumentritt" value="Blumentritt" />
                  <Picker.Item label="Tayuman" value="Tayuman" />
                  <Picker.Item label="Bambang" value="Bambang" />
                  <Picker.Item label="Doroteo Jose" value="Doroteo Jose" />
                  <Picker.Item label="Carriedo" value="Carriedo" />
                  <Picker.Item label="Central Terminal" value="Central Terminal" />
                  <Picker.Item label="United Nations" value="United Nations" />
                  <Picker.Item label="Pedro Gil" value="Pedro Gil" />
                  <Picker.Item label="Quirino" value="Quirino" />
                  <Picker.Item label="Vito Cruz" value="Vito Cruz" />
                  <Picker.Item label="Gil Puyat" value="Gil Puyat" />
                  <Picker.Item label="Libertad" value="Libertad" />
                  <Picker.Item label="EDSA" value="EDSA" />
                </Picker>
              </Row>
              <Row size={4} style={{ borderBottomColor: 'white', borderBottomWidth: 1, padding: 15 }}>
                <Col style={{ flexDirection: "row", justifyContent: "center" }} >
                  <TouchableOpacity
                    style={{ flexDirection: "column", justifyContent: "center" }}>
                    <View style={{ alignSelf: "center" }}>
                      {thumbnail}
                    </View>
                    <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 24 }}>{category}</Text>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row size={4} style={{ borderBottomColor: 'white', borderBottomWidth: 1, padding: 0 }}>
                <Col style={this.getButtonStyle('Maintenance')} >
                  <TouchableOpacity
                    style={{ width: '100%', flexDirection: "column", justifyContent: "center", padding: 15 }}
                    onPress={() => this.setState({ specifics: "Maintenance" })}>
                    <View style={{ alignSelf: "center" }}>
                      <Thumbnail large source={require("../assets/images/Maintenance.png")} />
                    </View>
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>Maintenance</Text>
                  </TouchableOpacity>
                </Col>
                <Col style={this.getButtonStyle('Broken')} >
                  <TouchableOpacity
                    style={{  width: '100%', flexDirection: "column", justifyContent: "center", padding: 15 }}
                    onPress={() => this.setState({ specifics: "Broken" })}>
                    <View style={{ alignSelf: "center" }}>
                      <Thumbnail large source={require("../assets/images/Broken.png")} />
                    </View>
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>Broken</Text>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row size={4} style={{ padding: 15 }} >
                <Form style={{ width: '100%' }} >
                  <Textarea
                    style={{ backgroundColor: "white", color: "gray", borderRadius: 5 }}
                    rowSpan={5} bordered placeholder="Type a message"
                    value={this.state.description}
                    onChangeText={(text) => this.setState({ description: text })}/>
                </Form>
              </Row>
            </Grid>
          </ScrollView>
          <View size={1} style={{ padding: 15 }} >
            <Button
              active={false}
              style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', borderRadius: 5 }}
              onPress={() => this.sendReport(category, this.state.station, this.state.specifics, this.state.description)}>
              <Text style={{ alignSelf: 'center' }}>SEND</Text>
            </Button>
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

export default ReportDetailsContainer;