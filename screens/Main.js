import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Button from "../components/Button";

class Main extends React.Component {
  click = () => {
    this.props.navigation.navigate("SecondPage");
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Button onPress={this.click} color="red">
            Click!!!!!!!
          </Button>
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

export default Main;
