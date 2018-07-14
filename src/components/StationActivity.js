import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text } from 'native-base';
import axios from 'axios';
import StationActivityItem from './StationActivityItem';

class StationActivity extends Component {
  constructor() {
    super();
    this.state = {
      northPosts: [],
      southPosts: [],
    }
  }

  componentDidMount() {
    this.getStationNorthActivities();
    this.getStationSouthActivities();
  }

  getStationNorthActivities() {
    const id = this.props.stationId;

    axios.get(`https://progress-on-track.herokuapp.com/api/stations/posts/${id}_NORTH`)
      .then((response) => response.data.results)
      .then((data) => {
        this.setState({ northPosts: data.posts });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getStationSouthActivities() {
    const id = this.props.stationId;

    axios.get(`https://progress-on-track.herokuapp.com/api/stations/posts/${id}_SOUTH`)
      .then((response) => response.data.results)
      .then((data) => {
        this.setState({ southPosts: data.posts });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderNorthPosts() {
    const { northPosts } = this.state;

    return northPosts.map((post, i) => {
      return (
        <StationActivityItem
          key={i}
          name={post.userId}
          description={post.description}
          station={`${post.stationId} - ${post.status}`} />
      );
    });
  }

  renderSouthPosts() {
    const { southPosts } = this.state;

    return southPosts.map((post, i) => {
      return (
        <StationActivityItem
          key={i}
          name={post.userId}
          description={post.description}
          station={`${post.stationId} - ${post.status}`} />
      );
    });

  }

  render() {
    return (
      <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#fff' }}>
        <Text style={styles.title}> Activity</Text>
        {/* <StationActivityItem
          name="asdada"
          description="asdadada"
          station="asdasdasda" /> */}
        {this.renderNorthPosts()}
        {this.renderSouthPosts()}
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