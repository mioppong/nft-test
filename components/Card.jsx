import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";

const Card = (props) => {
  const { item } = props;
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => console.log(item.item)}
      >
        <View>
          <Text style={styles.title}>{item.item.name}</Text>
          <Image
            source={{ uri: item.item.imageUrl }}
            style={{ height: 150, width: 150 }}
            resizeMode="contain"
          />
        </View>

        <View>
          <Text style={styles.sideText}>{item.item.hasOwner}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: "2%",
    // height: 150,
    // borderWidth: 0.3,
    width: 300,
    // backgroundColor: "green",
    borderRadius: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 2.51,

    elevation: 15,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "yellow",
  },
  title: {
    fontWeight: "bold",
  },
});
