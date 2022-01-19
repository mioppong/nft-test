import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Button,
} from "react-native";
import { connect } from "react-redux";
import CollectionCard from "../../components/CollectionCard";
import { getDataCollections } from "../../redux/actions";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  // handleGetMoreData = () => {
  //   const { getDataCollections, homeStore } = this.props;
  //   getDataCollections({ page: homeStore.collectionPage });
  // };
  render() {
    const { homeStore } = this.props;
    const { loading } = homeStore;
    return loading ? (
      <ActivityIndicator />
    ) : (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => {
            item.collectionDict.id;
          }}
          showsVerticalScrollIndicator={false}
          data={homeStore.collections}
          key={(item) => item.collectionDict.id}
          renderItem={(item) => <CollectionCard item={item} />}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  homeStore: state.homeStore,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapDispatchToProps = (dispatch) => ({
  getDataCollections: (payload) => {
    dispatch(getDataCollections(payload));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
