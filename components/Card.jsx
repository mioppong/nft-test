import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

const Card = (props) => {
  const { item } = props;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <View>
          <Text style={styles.title}>{item.item.name}</Text>
          <Image
            source={{ uri: item.item.imageUrl }}
            style={{ height: 300, width: 300 }}
            resizeMode="contain"
          />
        </View>

        <View>
          <Text style={styles.sideText}>{item.item.hasOwner}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        presentationStyle="pageSheet"
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <Image
            source={{ uri: item.item.imageUrl }}
            style={{ height: 300, width: 300, borderRadius: 20 }}
            resizeMode="contain"
          />
          <Text style={styles.title}>{item.item.name}</Text>

          <View style={{ marginVertical: 20 }}>
            <Text style={styles.description}>{item.item.description}</Text>
          </View>

          <Button title="CLOSE" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: "2%",
    alignItems: "center",
    justifyContent: "center",
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

    padding: "1%",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
  description: {
    color: "gray",
    textAlign: "center",
    fontSize: 15,
  },
});
