import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Thumbnail, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const uri = "https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png";

class StationActivityItem extends Component {
  render() {
    return (
      <Grid style={{ padding: 10 }}>
        <Col style={{ width: 70 }}>
          <Thumbnail source={{ uri }} style={styles.icon} />
        </Col>
        <Col>
          <Row style={{ justifyContent: 'space-between' }}>
            <Text style={styles.name}>Cecilia McGee</Text>
            <Text>10 mins ago</Text>
          </Row>
          <Row style={{ marginBottom: 30 }}>
            <Text>Siksikan!!!</Text>
          </Row>
          <Row>
            <Text style={{ fontWeight: 'bold' }}>UN Avenue - Northbound - Light</Text>
          </Row>
          <Row>
            <View style={styles.line} />
          </Row>
        </Col>
      </Grid>
    );
  }
}

const styles = {
  container: {
    padding: 10,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  icon: {
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  line: {
    borderBottomColor: '#E5E9EE',
    borderBottomWidth: 1,
    width: '100%',
    marginTop: 10,
  }
}

export default StationActivityItem;