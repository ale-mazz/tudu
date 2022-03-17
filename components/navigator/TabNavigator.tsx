import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import { Entypo, Feather } from "@expo/vector-icons";
import Calendar from "../TuduCalendar";
import Settings from "../Settings";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        tabBarActiveTintColor: theme.PRIMARY_BUTTON_COLOR,
        tabBarInactiveTintColor: theme.PRIMARY_BUTTON_COLOR,
        tabBarActiveBackgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
        tabBarInactiveBackgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
        tabBarStyle: {
          backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="list"
              size={focused ? 36 : 24}
              color={theme.PRIMARY_BUTTON_COLOR}
            />
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
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="calendar"
              size={focused ? 36 : 24}
              color={theme.PRIMARY_BUTTON_COLOR}
            />
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
          tabBarIcon: ({ focused }) => (
            <Feather
              name="settings"
              size={focused ? 36 : 24}
              color={theme.PRIMARY_BUTTON_COLOR}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
