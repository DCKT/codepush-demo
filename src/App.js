import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import codePush, { CheckFrequency, InstallMode } from "react-native-code-push";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{"\n"}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255,0,0)"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default codePush({
  mandatoryInstallMode: InstallMode.IMMEDIATE,
  checkFrequency: CheckFrequency.ON_APP_RESUME
})(App);
