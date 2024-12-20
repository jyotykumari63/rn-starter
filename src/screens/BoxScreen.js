import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Hello1</Text>
      <Text style={styles.textTwoStyle}>Hello2</Text>
      <Text style={styles.textThreeStyle}>Hello3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 5,
    borderColor: "blue",
    borderWidth: 2,
    // flexDirection: "row",
    height: 200,
    // width: 200,
    // alignItems: "center",
    // justifyContent: "center",
    // flex: 1,
    // alignItems: "stretch",
  },
  textOneStyle: {
    margin: 5,
    borderColor: "red",
    borderWidth: 2,
    alignSelf: "flex-end",
    // flex: 1,
  },
  textTwoStyle: {
    margin: 5,
    borderColor: "red",
    borderWidth: 2,
    alignSelf: "center",
    // flex: 2,
  },
  textThreeStyle: {
    margin: 5,
    borderColor: "red",
    borderWidth: 2,
    alignSelf: "flex-start",
    // flex: 1,
  },
});
export default BoxScreen;
