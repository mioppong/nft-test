import React, { Component } from "react";
import { View, Text, Button, FlatList } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../redux/actions";
import { useSelector } from "react-redux";
class Profile extends Component {
  constructor(props) {
    super(props);
  }
  handleLogout = () => {
    const { navigation, logout, homeStore } = this.props;
    navigation.navigate("Welcome");
    logout();
  };

  render() {
    return (
      <View>
        <Button title="Logout" onPress={this.handleLogout} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  homeStore: state.homeStore,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
