import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../../components/Card";

const NftScreen = () => {
  const homeStore = useSelector((state) => state.homeStore);
  const { loading } = homeStore;

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : homeStore.nfts && homeStore.nfts.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={homeStore.nfts}
          renderItem={(item) => <Card item={item} />}
        />
      ) : (
        <Text style>Sorry No Nfts here to show :(</Text>
      )}
    </View>
  );
};

export default NftScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
