import Expo from 'expo';
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import FeedScreen from './screens/FeedScreen';
import ProfileScreen from './screens/ProfileScreen';

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      feed: { screen: FeedScreen },
      profile: { screen: ProfileScreen }
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}

Expo.registerRootComponent(App);
