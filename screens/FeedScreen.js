import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../actions';

class FeedScreen extends Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text>FeedScreen</Text>
        <Text>FeedScreen</Text>
        <Text>FeedScreen</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {state: state};
}

export default connect(mapStateToProps, actions)(FeedScreen);
