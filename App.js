import React from "react";
import { StyleSheet } from "react-native";
import ReactNavigator from "./navigation/ReactNavigator";

class App extends React.Component {
  render() {
    return <ReactNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
