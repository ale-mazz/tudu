import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./components/settings";
import Calendar from "./components/calendar";
import Home from "./components/home";
import { createStackNavigator } from "@react-navigation/stack";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import { Entypo, Feather } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { MenuProvider } from "react-native-popup-menu";
import { PersistGate } from "redux-persist/integration/react";

type StackParamList = {
  TabNavigator: undefined;
};
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<StackParamList>();

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "cornflowerblue",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo name="list" size={focused ? 36 : 24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: "Home",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo name="calendar" size={focused ? 36 : 24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Home",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="settings" size={focused ? 36 : 24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App(): JSX.Element {
  let [fontsLoaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-Thin": require("./assets/fonts/Lato-Thin.ttf"),
    "Montserrat-Medium": require("./assets/fonts/MontserratAlternates-Medium.otf"),
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
          <MenuProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="TabNavigator"
                  component={TabNavigator}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </MenuProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
