import React, { Component } from 'react';
import { StyleProvider, Container, Text, Content, View, Thumbnail } from 'native-base';
import AppHeader from '../components/AppHeader';
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from "react-native";

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

class Reports extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle='Send a Report' />
          <Grid style={{ margin: 40 }}>
            <Col>
              <Row style={{ flexDirection: "row", justifyContent: "center"}}>
                <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center"}}>
                  <Thumbnail large source={require("../assets/images/Turnstyles.png")} />
                  <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18 }}>Turnstiles</Text>
                </TouchableOpacity>
              </Row>
              <Row style={{ flexDirection: "row", justifyContent: "center"}}>
                <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center"}}>
                  <Thumbnail large source={require("../assets/images/Elevator.png")} />
                  <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18 }}>Elevator</Text>
                </TouchableOpacity>
              </Row>
              <Row style={{ flexDirection: "row", justifyContent: "center"}}>
                <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center"}}>
                  <Thumbnail large source={require("../assets/images/ComfortRoom.png")} />
                  <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18 }}>Restroom</Text>
                </TouchableOpacity>
              </Row>
            </Col>
            <Col>
            <Row style={{ flexDirection: "row", justifyContent: "center"}}>
                <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center"}}>
                  <Thumbnail large source={require("../assets/images/Train.png")} />
                  <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18 }}>Train</Text>
                </TouchableOpacity>
              </Row>
              <Row style={{ flexDirection: "row", justifyContent: "center"}}>
                <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center"}}>
                  <Thumbnail large source={require("../assets/images/Escalator.png")} />
                  <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18 }}>Escalator</Text>
                </TouchableOpacity>
              </Row>
              <Row style={{ flexDirection: "row", justifyContent: "center"}}>
                <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center"}}>
                  <Thumbnail large source={require("../assets/images/Staff.png")} />
                  <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18 }}>Staff</Text>
                </TouchableOpacity>
              </Row>
            </Col>
          </Grid>
        </Container>
      </StyleProvider>
    );
  }
}

export default Reports;