import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Counter: {count}</Text>
      <Button title="Increase" onPress={() => setCount((prev) => prev + 1)} />
      <Button title="Decrease" onPress={() => setCount((prev) => prev - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
