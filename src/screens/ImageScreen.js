import { View, StyleSheet } from "react-native";
import ImageDetails from "../components/imageDetails";

const ImageScreen = () => {
  const imageData = [
    {
      id: 1,
      title: "Beach",
      imageScore: 9,
      path: require("../../assets/beach.jpg"),
    },
    {
      id: 2,
      title: "Forest",
      imageScore: 8,
      path: require("../../assets/forest.jpg"),
    },
    {
      id: 3,
      title: "Mountain",
      imageScore: 7,
      path: require("../../assets/mountain.jpg"),
    },
  ];
  return (
    <View style={styles.imageComponentContainer}>
      {imageData.map((img) => (
        <ImageDetails key={img.id} imageData={img} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  imageComponentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ImageScreen;
