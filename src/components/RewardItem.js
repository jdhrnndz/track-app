import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Text, Button } from 'native-base';

class RewardItem extends Component {
  render() {
    return (
      <TouchableOpacity style={{ flex: 0, flexDirection: 'column', alignItems: 'center', marginBottom: 10 }}
        onPress={this.props.onPressAction}>
        <Image source={require("../assets/images/ticket.png")} style={{ width: '100%', height: 250 }} />
        <Text>{this.props.rewardName}</Text>
        <Text>{`${this.props.rewardValue} points to avail`}</Text>
      </TouchableOpacity>
    );
  }
}

export default RewardItem;