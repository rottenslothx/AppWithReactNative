import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[styles.container, { backgroundColor: this.props.color }]}>
          <Text>{this.props.children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Button;
