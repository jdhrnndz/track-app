import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text } from 'native-base';
import StationActivityItem from './StationActivityItem';

class StationActivity extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#fff' }}>
        <Text style={styles.title}> Activity</Text>
        <StationActivityItem />
        <StationActivityItem />
        <StationActivityItem />

      </View>
    );
  }
}

const styles = {
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#18233F',
    marginTop: 5,
    marginBottom: 5,
  }
}

export default StationActivity;