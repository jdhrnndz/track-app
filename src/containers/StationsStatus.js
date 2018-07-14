import React, { Component } from 'react';
import { StyleProvider, Container, Text, Button } from 'native-base';
import AppHeader from '../components/AppHeader';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

class StationsStatus extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle='LRT Stations Status' />
          <Text>Home</Text>
          <Button onPress={() => { this.props.navigation.navigate('StationDetails') }}>
            <Text>details</Text></Button>
        </Container>
      </StyleProvider>
    );
  }
}

export default StationsStatus;