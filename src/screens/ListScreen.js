import React, { useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";

const ListScreen = () => {
  const [users, setUsers] = React.useState([]);

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/users`);
    const jsonRes = await res.json();
    // console.log(jsonRes.users);
    setUsers(jsonRes.users);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const viewCardDetail = (item) => {
    //Alert.alert("hello" + JSON.stringify(item));
  };
  const CardComponent = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.cardContainer, styles.textStyle]}
        onPress={() => viewCardDetail(item)}
      >
        <Text>{`First Name: ${item.firstName}`}</Text>
        <Text>{`Last Name: ${item.lastName}`}</Text>
        <Text>{`Age: ${item.age}`}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return (
            <CardComponent item={item} />
            //   <Text
            //     style={styles.textStyle}
            //   >{`Name: ${item.firstName} ${item.lastName} and Age ${item.age}`}</Text>
          );
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: "blue",
    borderRadius: 5,
    width: 300,
    height: 200,
    backgroundColor: "#fff",
  },
});
export default ListScreen;
