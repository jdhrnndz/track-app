import { TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Text, Card, CardItem, View, Body, Icon } from 'native-base';

class StationOverviewCard extends Component {
  render() {
    const { name, status } = this.props;
    const { southbound, northbound } = status;

    return (
      <Card style={styles.card} containerStyle={{padding: 0}}>
        <CardItem>
          <Body style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.h2}>{name}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.flowTitle}>Southbound:  </Text>
                <Text style={styles[southbound.toLowerCase()]}>{southbound}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.flowTitle}>Northbound:  </Text>
                <Text style={styles[northbound.toLowerCase()]}>{northbound}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('StationDetails') }} style={styles.cardAction}>
              <Text style={{ textAlign: 'center', color: '#072b4e' }}>
                More{"\n"}Details
              </Text>
              <Icon style={{ color: '#072b4e' }} name="arrow-forward" />
            </TouchableOpacity>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  card: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 12,
    marginBottom: 1,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#18233F',
    marginLeft: 12,
    marginBottom: 2,
  },
  flowTitle: {
    color: '#A7A9AA',
    marginLeft: 12,
  },
  heavy: {
    color: '#DA2B52',
    fontWeight: 'bold',
  },
  moderate: {
    color: '#F5A71D',
    fontWeight: 'bold',
  },
  light: {
    color: '#12AE20',
    fontWeight: 'bold',
  },
  cardAction: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderColor: 'black',
    borderLeftWidth: 1,
    paddingLeft: 20,
    paddingRight: 10,
    borderStyle: 'dashed',
    borderRadius: 0,
  }
}

export default StationOverviewCard;