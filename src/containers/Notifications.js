import React, { Component } from 'react';
import { StyleProvider, Container, Text } from 'native-base';
import AppHeader from '../components/AppHeader';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

class Notifications extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle='Notifictions' />
          <Text>Notifs here</Text>
        </Container>
      </StyleProvider>
    );
  }
}

export default Notifications;