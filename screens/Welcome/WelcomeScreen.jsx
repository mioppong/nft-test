import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { getDataCollections } from "../../redux/actions";

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "HomeScreen",
    };
  }

  handleLogin = () => {
    const { navigation, getDataCollections } = this.props;
    navigation.navigate("Tabs");
    getDataCollections();
  };
  render() {
    const { homeStore } = this.props;
    const { loading } = homeStore;

    return loading ? (
      <ActivityIndicator />
    ) : (
      <View style={styles.container}>
        <Text> Welcome to the Best Nft Platform </Text>

        <Button title="Login :)" onPress={this.handleLogin} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  homeStore: state.homeStore,
});

const mapDispatchToProps = (dispatch) => ({
  getDataCollections: (payload) => {
    dispatch(getDataCollections(payload));
  },
});
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
