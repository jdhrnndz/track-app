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
            <Text style={styles.name}>{this.props.name}</Text>
            <Text style={styles.time}>10 mins ago</Text>
          </Row>
          <Row style={{ marginBottom: 30 }}>
            <Text>{this.props.description}</Text>
          </Row>
          <Row>
            <Text style={{ fontWeight: 'bold' }}>{this.props.station}</Text>
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
  time: {
    color: '#A7B6C6',
    fontSize: 14,
  },
  line: {
    borderBottomColor: '#E5E9EE',
    borderBottomWidth: 1,
    width: '100%',
    marginTop: 10,
  }
}

export default StationActivityItem;