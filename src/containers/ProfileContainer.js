import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { StyleProvider, Container, Button, Text, Thumbnail } from 'native-base';
import AppHeader from '../components/AppHeader';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

const uri = "https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png";

class Profile extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={{ backgroundColor: '#B5E9E5' }}>
          <AppHeader headerTitle='Profile' />
          <View style={{ flex: 0, flexDirection: 'column', alignItems: 'center' }}>
            <Thumbnail source={{ uri }} style={{ height: 70, width: 70, marginTop: 50 }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Stella Summers</Text>
            <Button transparent style={{ alignSelf: 'center' }}
              onPress={() => this.props.navigation.navigate('Rewards')}>
              <Text>425 points | Rewards</Text>
            </Button>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}

export default Profile;
