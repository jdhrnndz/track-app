import React, { Component } from 'react';
import {
  Header, Left, Right, Body, Button, Title, Text, Icon, Thumbnail
} from 'native-base';

class AppHeader extends Component {

  renderLeftIcon() {
    if (this.props.leftIcon === '' || this.props.leftIcon === undefined) {
      return null;
    }
    return <Icon name={this.props.leftIcon} style={{ color: '#000000' }} />;
  }

  renderRightIcon() {
    if (this.props.rightIcon === '' || this.props.rightIcon === undefined) {
      return null;
    }
    return <Icon name={this.props.rightIcon} style={{ color: '#000000' }} />;
  }

  renderTitle() {
    return <Title headerTitle style={{ color: '#18233F' }}>{this.props.headerTitle}</Title>
  }

  render() {
    return (
      <Header>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={this.props.leftAction}>
            {this.renderLeftIcon()}
          </Button>
        </Left>
        <Body style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          {this.renderTitle()}
        </Body>
        <Right style={{ flex: 1 }}>
          <Button transparent onPress={this.props.rightAction}>
            {this.renderRightIcon()}
          </Button>
        </Right>
      </Header >
    );
  }
}

export default AppHeader;