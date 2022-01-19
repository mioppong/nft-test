import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistedStore, store } from "./redux/store";
import MainRoute from "./routes/MainRoute";
import WelcomeScreen from "./screens/Welcome/WelcomeScreen";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <MainRoute />
        </PersistGate>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
