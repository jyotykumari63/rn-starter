import { View, Text, Image, StyleSheet } from "react-native";

const ImageDetails = ({ imageData }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={imageData.path} />
      <Text style={styles.imageTextStyle}>{imageData.title}</Text>
      <Text style={styles.imageTextStyle}>
        Image Score: {imageData.imageScore}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imageTextStyle: {
    textAlign: "center",
  },
});
export default ImageDetails;
