import React, { Component } from 'react';
import {
  Header, Left, Right, Body, Button, Title, Text, Icon, Thumbnail
} from 'native-base';

class AppHeader extends Component {

  renderLeftIcon() {
    if (this.props.leftIcon === '' || this.props.leftIcon === undefined) {
      return null;
    }
    return <Icon name={this.props.leftIcon} />;
  }

  renderRightIcon() {
    if (this.props.rightIcon === '' || this.props.rightIcon === undefined) {
      return null;
    }
    return <Icon name={this.props.rightIcon} />;
  }

  renderTitle() {
    return <Title headerTitle>{this.props.headerTitle}</Title>
  }

  render() {
    return (
      <Header>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={this.props.leftAction}>
            {this.renderLeftIcon()}
          </Button>
        </Left>
        <Body style={{ flex: 2 }}>
          {this.renderTitle()}
        </Body>
        <Right style={{ flex: 1 }}>
          <Button transparent onPress={this.props.rightAction}>
            {this.renderRightIcon()}
          </Button>
        </Right>
      </Header>
    );
  }
}

export default AppHeader;