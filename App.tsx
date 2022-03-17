import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import { Provider, useSelector } from "react-redux";
import { persistor, RootState, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import { TabNavigator } from "./components/navigator/TabNavigator";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type StackParamList = {
  TabNav: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const App = () => {
  let [fontsLoaded] = useFonts({
    "Montserrat-LightItalic": require("./assets/fonts/Montserrat-LightItalic.otf"),
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
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={"TabNav"}>
              <Stack.Screen
                name="TabNav"
                component={TabNavigator}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
