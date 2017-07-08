import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../actions';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {state: state};
}

export default connect(mapStateToProps, actions)(ProfileScreen);
