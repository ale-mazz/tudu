import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { MenuProvider } from "react-native-popup-menu";
import { PersistGate } from "redux-persist/integration/react";
import { TabNavigator } from "./components/navigator/tab-navigator";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type StackParamList = {
  TabNav: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const App = () => {
  let [fontsLoaded] = useFonts({
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.otf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.otf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MenuProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={"TabNav"}>
              <Stack.Screen
                name="TabNav"
                component={TabNavigator}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </MenuProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
