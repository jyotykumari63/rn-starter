import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  const element = <Text style={styles.subText}>My Name Is Jyoti!</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting Start With React Native!</Text>
      <View style={styles.buttonContainerStyle}>
        <Button
          style={styles.buttonStyle}
          title="Go to List"
          onPress={() => navigation.navigate("List")}
        />
        <Button
          style={styles.buttonStyle}
          title="Go to Images"
          onPress={() => navigation.navigate("Images")}
        />
        <Button
          style={styles.buttonStyle}
          title="Go to Counter"
          onPress={() => navigation.navigate("Counter")}
        />
        <Button
          style={styles.buttonStyle}
          title="Go to Colors"
          onPress={() => navigation.navigate("Colour")}
        />
        <Button
          style={styles.buttonStyle}
          title="Go to Square"
          onPress={() => navigation.navigate("Square")}
        />
        <Button
          style={styles.buttonStyle}
          title="Go to TextInput"
          onPress={() => navigation.navigate("TextInput")}
        />
        <Button
          style={styles.buttonStyle}
          title="Go to Box Screen"
          onPress={() => navigation.navigate("BoxScreen")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 45,
  },
  subText: {
    fontSize: 20,
  },
  buttonContainerStyle: {
    // borderWidth: 2,
    // borderColor: "red",
  },
});

export default HomeScreen;
