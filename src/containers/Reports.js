import React, { Component } from 'react';
import { StyleProvider, Container, Text, Content, View, Thumbnail } from 'native-base';
import AppHeader from '../components/AppHeader';
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from "react-native";
import ReportCategory from "../components/ReportCategory";

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
                <ReportCategory
                  category="Turnstiles"
                  thumbnail={
                    <Thumbnail large source={require("../assets/images/Turnstyles.png")} />
                  }
                  navigation={this.props.navigation}
                />
              </Row>
              <Row style={{ flexDirection: "row", justifyContent: "center"}}>
                <ReportCategory
                  category="Elevator"
                  thumbnail={
                    <Thumbnail large source={require("../assets/images/Elevator.png")} />
                  }
                  navigation={this.props.navigation}
                />
              </Row>
              <Row style={{ flexDirection: "row", justifyContent: "center"}}>
                <ReportCategory
                  category="Restroom"
                  thumbnail={
                    <Thumbnail large source={require("../assets/images/ComfortRoom.png")} />
                  }
                  navigation={this.props.navigation}
                />
              </Row>
            </Col>
            <Col>
              <Row style={{ flexDirection: "row", justifyContent: "center"}}>
                <ReportCategory
                  category="Train"
                  thumbnail={
                    <Thumbnail large source={require("../assets/images/Train.png")} />
                  }
                  navigation={this.props.navigation}
                />
              </Row>
              <Row style={{ flexDirection: "row", justifyContent: "center"}}>
                <ReportCategory
                  category="Escalator"
                  thumbnail={
                    <Thumbnail large source={require("../assets/images/Escalator.png")} />
                  }
                  navigation={this.props.navigation}
                />
              </Row>
              <Row style={{ flexDirection: "row", justifyContent: "center"}}>
                <ReportCategory
                  category="Staff"
                  thumbnail={
                    <Thumbnail large source={require("../assets/images/Staff.png")} />
                  }
                  navigation={this.props.navigation}
                />
              </Row>
            </Col>
          </Grid>
        </Container>
      </StyleProvider>
    );
  }
}

export default Reports;