import React, { Component } from 'react';
import { View } from 'react-native';
import { StyleProvider, Container, Content, Text, Button } from 'native-base';
import AppHeader from '../components/AppHeader';
import StationNextStatus from '../components/StationNextStatus';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
import StationActivity from '../components/StationActivity';


class StationDetailsContainer extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle='UN Avenue'
            leftIcon='arrow-back'
            leftAction={() => this.props.navigation.pop()} />
          <View style={{ flex: 1 }}>
            <Content>
              <Text style={styles.h2}>Northbound</Text>
              <StationNextStatus
                currentStep={0}
                stations={["Doroteo Jose Station", "Carriedo Station"]} />
              <Text style={styles.h2}>Southbound</Text>
              <StationNextStatus
                currentStep={1}
                stations={["Carriedo Station", "Central Terminal"]} />
              <Text style={styles.h2}></Text>
              <StationActivity />
            </Content>
          </View>
          <View style={{ height: 50, backgroundColor: '#B5E9E5', paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'center' }}>
            <Button block style={{ backgroundColor: '#009D93', width: '100%', height: 30, alignSelf: 'center' }}><Text>Post An Activity</Text></Button>
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

};

export default StationDetailsContainer;