import { Button, StyleSheet, Switch, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { switchTheme } from "../redux/actions/theme.actions/actions";
import { customTheme, darkTheme, lightTheme } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

const Settings = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const changeTheme = (theme: customTheme) => {
    dispatch(switchTheme(theme));
  };

  return (
    <SafeAreaView style={styles(theme).container}>
      <StatusBar
        style={theme.STATUS_BAR_STYLE === "light" ? "light" : "dark"}
      />
      <View style={styles(theme).themeSettings}>
        <Text style={styles(theme).themeText}>
          {theme.mode === "light" ? "Tema: chiaro" : "Tema: scuro"}
        </Text>
        <Switch
          thumbColor={theme.PRIMARY_BUTTON_COLOR}
          ios_backgroundColor={theme.PRIMARY_BUTTON_BACKGROUND_COLOR}
          trackColor={{
            true: theme.PRIMARY_BUTTON_BACKGROUND_COLOR,
            false: theme.PRIMARY_BUTTON_BACKGROUND_COLOR,
          }}
          value={theme.mode !== "light"}
          onChange={() =>
            changeTheme(theme.mode === "dark" ? lightTheme : darkTheme)
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = (theme: customTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
    },
    themeSettings: {
      marginTop: 10,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      marginHorizontal: 20,
    },
    themeText: {
      color: theme.PRIMARY_TEXT_COLOR,
      fontSize: 20,
      marginLeft: 22,
      fontFamily: "Montserrat-Medium",
    },
  });

export default Settings;
