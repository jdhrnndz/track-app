import React, { Component } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { StyleProvider, Container, Button, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import PopupDialog from 'react-native-popup-dialog';

import AppHeader from '../components/AppHeader';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

class TicketStoresContainer extends Component {
  constructor() {
    super();
    this.popupDialog = {};
  }

  showPopup() {
    this.popupDialog.show();
  }

  hidePopup() {
    this.popupDialog.dismiss();
  }

  renderPopup() {
    return (<PopupDialog
      ref={(popupDialog) => { this.popupDialog = popupDialog; }}
      dialogStyle={{ marginTop: -100 }}
      height={0.8}
      width={0.9}>
      <View style={{ padding: 10, flex: 0, flexDirection: 'column' }}>
        <Icon name="close" style={{ alignSelf: 'flex-end' }} onPress={() => this.hidePopup()} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>LRT E-ticket</Text>
        <Text>Light Rail Transit Electronic Ticket</Text>
        <Image source={require("../assets/images/ticket_qr.png")} style={{ width: '70%', height: 300, alignSelf: 'center' }} />
        <Button block style={{ alignSelf: 'center', marginBottom: 5 }}>
          <Text>
            Learn how to load your E-ticket
          </Text>
        </Button>
      </View>
    </PopupDialog>);
  }

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle='LRT E-Ticket' />
          {this.renderPopup()}
          <View style={{ flex: 0, flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', marginHorizontal: 40, marginVertical: 30, textAlign: 'center' }}>Tap a loading station to know the procedure on how to load your E-ticket.
            </Text>
            <Grid style={{ flex: 0 }}>
              <Row style={{ flex: 0, marginBottom: 20, justifyContent: 'center' }}>
                <TouchableOpacity style={{ width: 120, height: 120, marginHorizontal: 10 }} onPress={() => this.showPopup()}>
                  <Image source={require("../assets/images/store_711.png")} style={{ width: '100%', height: '100%' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 120, height: 120, marginHorizontal: 10 }} onPress={() => this.showPopup()}>
                  <Image source={require("../assets/images/store_coins.png")} style={{ width: '100%', height: '100%' }} />
                </TouchableOpacity>
              </Row>
              <Row style={{ flex: 0 }}>
                <TouchableOpacity style={{ alignSelf: 'center', width: 140, height: 45, marginHorizontal: 5 }} onPress={() => this.showPopup()}>
                  <Image source={require("../assets/images/store_familymart.png")} style={{ width: '100%', height: '100%' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 160, height: 100, marginHorizontal: 5 }} onPress={() => this.showPopup()}>
                  <Image source={require("../assets/images/store_ministop.png")} style={{ width: '100%', height: '100%' }} />
                </TouchableOpacity>
              </Row>
            </Grid>
          </View>

        </Container>
      </StyleProvider>
    );
  }
}

export default TicketStoresContainer;