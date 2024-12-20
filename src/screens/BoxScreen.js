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

const BoxScreen1 = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewStyle1}></View>
      <View style={styles.viewStyle2parent}>
        <View style={styles.viewStyle2}></View>
      </View>
      <View style={styles.viewStyle3}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    margin: 5,
    borderColor: "blue",
    borderWidth: 2,
    flexDirection: "row",
    height: 200,
    // width: 200,
    // alignItems: "center",
    justifyContent: "space-around",
    // flex: 1,
    // alignItems: "stretch",
  },
  textOneStyle: {
    margin: 5,
    borderColor: "red",
    borderWidth: 2,
    // alignSelf: "flex-end",
    // flex: 1,
  },
  textTwoStyle: {
    margin: 5,
    borderColor: "red",
    borderWidth: 2,
    height: 100,
    width: 100,
    top: 50,
    left: 150,
    right: 150,
    bottom: 50,
    position: "absolute",
    // alignSelf: "center",
    // flex: 2,
  },
  textThreeStyle: {
    margin: 5,
    borderColor: "red",
    borderWidth: 2,
    // alignSelf: "flex-start",
    // flex: 1,
  },
  viewStyle1: {
    height: 50,
    width: 50,
    backgroundColor: "pink",
  },
  viewStyle2: {
    height: 50,
    width: 50,
    backgroundColor: "yellow",
    // marginTop: 50,
    // alignSelf: "flex-end",
    top: 50,
  },
  viewStyle3: {
    height: 50,
    width: 50,
    backgroundColor: "blue",
  },
  viewStyle2parent: {
    height: 100,
    justifyContent: "flex-end",
  },
});
export default BoxScreen1;
