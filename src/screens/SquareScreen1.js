import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT_BY = 15;
const COLOR_DECREMENT_BY = 15;
const SquareScreen1 = () => {
  //const [color, setColor] = useState("");
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        console.log(color, change);

        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor("red", COLOR_INCREMENT_BY)}
        onDecrease={() => setColor("red", -1 * COLOR_DECREMENT_BY)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor("blue", COLOR_INCREMENT_BY)}
        onDecrease={() => setColor("blue", -1 * COLOR_DECREMENT_BY)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor("green", COLOR_INCREMENT_BY)}
        onDecrease={() => setColor("green", -1 * COLOR_DECREMENT_BY)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen1;
