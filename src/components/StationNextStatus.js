import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text } from 'native-base';
import StepIndicator from 'react-native-step-indicator';

class StationNextStatus extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StepIndicator
          currentPosition={this.props.currentStep}
          labels={this.props.stations}
          stepCount={2}
          direction='vertical'
          customStyles={styles.step}
        />
        <View style={{ marginTop: 10 }}>
          <Text style={styles.moderate}>Moderate</Text>
          <Text style={styles.eta}>ETA: 2 min</Text>
        </View>
      </View>
    );
  }

}

const styles = {
  container: {
    backgroundColor: '#fff',
    height: 90,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
  },
  step: {
    stepIndicatorSize: 10,
    currentStepIndicatorSize: 12,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 2,
    stepIndicatorFinishedColor: '#18233F',
    stepIndicatorUnFinishedColor: '#18233F',
    stepIndicatorCurrentColor: '#FF857A',
    labelColor: '#18233F',
    currentStepLabelColor: '#18233F',
    stepStrokeCurrentColor: '#FF857A',
    stepIndicatorLabelCurrentColor: '#FF857A',
    stepIndicatorLabelFinishedColor: '#18233F',
    stepIndicatorLabelUnFinishedColor: '#18233F',
    stepIndicatorLabelFontSize: 2,
    currentStepIndicatorLabelFontSize: 2,
    separatorFinishedColor: '#000',
    separatorUnFinishedColor: '#000',
  },
  moderate: {
    color: '#F9B564',
    fontSize: 22,
    fontWeight: 'bold',
  },
  heavy: {
    color: '#E02955',
    fontSize: 22,
    fontWeight: 'bold',
  },
  eta: {
    fontSize: 18
  }
};
export default StationNextStatus;