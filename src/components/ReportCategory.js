import { TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Text } from 'native-base';

class ReportCategory extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{ flexDirection: "column", justifyContent: "center"}}
        onPress={() => { this.props.navigation.navigate('ReportDetailsContainer', { category: this.props.category, thumbnail: this.props.thumbnail }) }}>
        {this.props.thumbnail}
        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18 }}>{this.props.category}</Text>
      </TouchableOpacity>
    );
  }
}

export default ReportCategory;