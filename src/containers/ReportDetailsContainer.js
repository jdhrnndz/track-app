import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import { StyleProvider, Container, Text, Button, View, Thumbnail, Picker, Icon, Form, Textarea } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity, ScrollView } from "react-native";

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

class ReportDetailsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      station: null,
      specifics: null,
      description: null,
    }
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
              <Row size={4} style={{ borderBottomColor: 'white', borderBottomWidth: 1, padding: 15 }}>
                <Col style={{ flexDirection: "row", justifyContent: "center" }} >
                  <TouchableOpacity
                    style={{ flexDirection: "column", justifyContent: "center" }}>
                    <View style={{ alignSelf: "center" }}>
                      <Thumbnail large source={require("../assets/images/Maintenance.png")} />
                    </View>
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>Maintenance</Text>
                  </TouchableOpacity>
                </Col>
                <Col style={{ flexDirection: "row", justifyContent: "center" }} >
                  <TouchableOpacity
                    style={{ flexDirection: "column", justifyContent: "center" }}>
                    <View style={{ alignSelf: "center" }}>
                      <Thumbnail large source={require("../assets/images/Broken.png")} />
                    </View>
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>Broken</Text>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row size={4} style={{ padding: 15 }} >
                <Form style={{ width: '100%' }} >
                  <Textarea style={{ backgroundColor: "white", color: "gray", borderRadius: 5 }} rowSpan={5} bordered placeholder="Type a message" />
                </Form>
              </Row>
            </Grid>
          </ScrollView>
          <View size={1} style={{ padding: 15 }} >
            <Button style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', borderRadius: 5 }}>
              <Text style={{ alignSelf: 'center' }}>SEND</Text>
            </Button>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}

export default ReportDetailsContainer;