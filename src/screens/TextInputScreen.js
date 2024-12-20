import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextInputScreen = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.ViewContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.textLabel}>Name: </Text>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          value={text}
          onChangeText={(newTxt) => setText(newTxt)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textLabel}>Password: </Text>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          secureTextEntry={true}
          onChangeText={(newTxt) => setPassword(newTxt)}
        />
      </View>
      {password.length < 4 && (
        <Text style={styles.errorMsg}>
          Password Must Be Atleast 4 digit Character
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
  },
  textLabel: {
    flex: 1,
    textAlign: "center",
    paddingTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    // margin: 15,
    flex: 3,
    fontWeight: "600",
    fontSize: 16,
    // height: 25,
    // color: "red",
  },
  errorMsg: {
    color: "red",
    fontSize: 16,
    margin: 10,
  },
});
export default TextInputScreen;
