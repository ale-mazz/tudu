import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../home";
import { Entypo, Feather } from "@expo/vector-icons";
import Calendar from "../calendar";
import Settings from "../settings";

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
