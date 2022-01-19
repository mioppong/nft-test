import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";
import { getData } from "../redux/actions";
import { useNavigation } from "@react-navigation/native";

const CollectionCard = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { item } = props;
  const { collectionDict } = item.item;

  const getCollectionNfts = () => {
    dispatch(getData({ displayName: collectionDict.displayName }));
    navigation.navigate("nfts", { name: collectionDict.displayName });
  };
  return collectionDict.bannerImageUrl ? (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => getCollectionNfts()}
      >
        <ImageBackground
          source={{ uri: collectionDict.bannerImageUrl }}
          resizeMode="contain"
          style={{ flex: 1 }}
        >
          <View>
            <Image
              source={{ uri: collectionDict.avatarImageUrl }}
              resizeMode="contain"
              style={{ height: 50, width: 50, borderRadius: 100 }}
            />
          </View>
        </ImageBackground>
        <Text style={styles.title}>{collectionDict.displayName}</Text>
      </TouchableOpacity>
    </>
  ) : null;
};

export default CollectionCard;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 300,
    // backgroundColor: "green",
    // borderWidth: 0.3,
    borderRadius: 25,
    margin: 10,
    padding: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
