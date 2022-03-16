import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import { Entypo, Feather } from "@expo/vector-icons";
import Calendar from "../TuduCalendar";
import Settings from "../Settings";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
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
          tabBarIcon: ({ focused, color }) => (
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
          tabBarIcon: ({ focused, color }) => (
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
          tabBarIcon: ({ focused, color }) => (
            <Feather name="settings" size={focused ? 36 : 24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
