import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import NftScreen from "../screens/NftsScreen/NftScreen";
import Profile from "../screens/Profile/Profile";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      component={HomeScreen}
      options={{ headerTitle: "Explore NFT Collections" }}
      name="Home"
    />
    <Tab.Screen component={Profile} name="Profile" />
  </Tab.Navigator>
);
const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Tabs"  component={Tabs} options={{headerShown:false}} />
        <Stack.Screen
          name="nfts"
          component={NftScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
