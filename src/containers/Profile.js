import React, { Component } from 'react';
import { StyleProvider, Container, Text } from 'native-base';
import AppHeader from '../components/AppHeader';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

class Profile extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle='Profile' />
          <Text>Profile here</Text>
        </Container>
      </StyleProvider>
    );
  }
}

export default Profile;
