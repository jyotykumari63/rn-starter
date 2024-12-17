import React from "react";
import { FlatList, View, Text, StyleSheet, Button } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = React.useState([]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Add Color"
        onPress={() => {
          //   console.log(randomRGBcolors());
          setColors([...colors, randomRGBcolors()]);
          //   console.log(colors);
        }}
      />
      {/* <View style={[styles.blockStyle, { backgroundColor: colors[2] }]}></View> */}
      <FlatList
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        data={colors}
        renderItem={({ item }) => (
          <View style={[styles.blockStyle, { backgroundColor: item }]}></View>
        )}
      />
    </View>
  );
};

const randomRGBcolors = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};
const styles = StyleSheet.create({
  blockStyle: {
    marginVertical: 5,
    height: 100,
    width: 100,
  },
});

export default ColorScreen;
