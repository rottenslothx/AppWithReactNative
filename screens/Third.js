import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import Button from "../components/Button";

class SecondPage extends React.Component {
  state = {
    number: 0
  };
  add = () => {
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Button onPress={this.add} color="yellow">
            +
          </Button>
          <Text>{this.state.number}</Text>
        </ScrollView>
      </SafeAreaView>
    );
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

export default SecondPage;
