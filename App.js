/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import Dashboard from "./src/component/Dashboard/Dashboard";
import { Provider } from "react-redux";
import configureStore from "./src/redux-store/store";

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Dashboard />
        </SafeAreaView>
      </Provider>
    );
  }
}
