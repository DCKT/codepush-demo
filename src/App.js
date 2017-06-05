import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import codePush, { CheckFrequency, InstallMode } from "react-native-code-push";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._checkUpdates}>
          <Text>Check for updates</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _checkUpdates() {
    codePush.sync({
      updateDialog: true,
      installMode: InstallMode.IMMEDIATE
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255,0, 0)"
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
  checkFrequency: CheckFrequency.MANUAL
})(App);
