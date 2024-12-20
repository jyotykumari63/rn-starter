import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CHANGE_COUNT_BY = 1;
// const CounterScreen1 = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <View>
//       <Text>Counter: {count}</Text>
//       <Button title="Increase" onPress={() => setCount((prev) => prev + 1)} />
//       <Button title="Decrease" onPress={() => setCount((prev) => prev - 1)} />
//     </View>
//   );
// };

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "increase_count":
      return state.count + action.payload < 0
        ? state
        : { ...state, count: state.count + action.payload };
    case "decrease_count":
      return state.count + action.payload < 0
        ? state
        : { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducerFunc, { count: 0 });
  return (
    <View>
      <Text>Counter: {state.count}</Text>
      <Button
        title="Increase"
        onPress={() =>
          dispatch({ type: "increase_count", payload: CHANGE_COUNT_BY })
        }
      />
      <Button
        title="Decrease"
        onPress={() =>
          dispatch({ type: "decrease_count", payload: -1 * CHANGE_COUNT_BY })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
