import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { AddItemModal } from "./AddItemModal";
import { Item } from "../redux/types/types";
import Tudu from "./Tudu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setSelectedDay } from "../redux/actions/item.actions/actions";
import moment from "moment";
import "moment/locale/it";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { customTheme } from "../theme";

const Home: React.FC = () => {
  moment.locale("it");

  const [modalVisible, setModalVisible] = React.useState(false);
  const { items } = useSelector((state: RootState) => state.items);
  const { theme } = useSelector((state: RootState) => state.theme);
  const { selectedDay } = useSelector((state: RootState) => state.day);
  const dispatch = useDispatch();

  const onOpenModal = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    if (!selectedDay) {
      dispatch(setSelectedDay(moment(new Date()).format("YYYY-MM-DD")));
    }
  }, [selectedDay]);

  return (
    <View style={styles(theme).container}>
      <StatusBar
        style={theme.STATUS_BAR_STYLE === "light" ? "light" : "dark"}
      />
      <SafeAreaView style={styles(theme).safeArea}>
        <View style={styles(theme).header}>
          <Text style={styles(theme).headerText}>tudu</Text>
          <Text style={styles(theme).dayText}>
            {moment(selectedDay).format("LL")}
          </Text>
          <TouchableOpacity onPress={() => onOpenModal()}>
            <AntDesign
              style={styles(theme).headerIcon}
              name="plus"
              size={28}
              color="cornflowerblue"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView style={styles(theme).scrollArea}>
        {items.map((item: Item, index: number) => {
          if (item.day === selectedDay) {
            return (
              <Tudu key={item.text + "_" + index} item={item} index={index} />
            );
          }
        })}
        <AddItemModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
    </View>
  );
};

const styles = (theme: customTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
    },
    safeArea: {
      backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
    },
    header: {
      backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    headerText: {
      color: theme.PRIMARY_TEXT_COLOR,
      fontSize: 34,
      marginLeft: 22,
      fontFamily: "Montserrat-Medium",
    },
    dayText: {
      color: theme.PRIMARY_TEXT_COLOR,
      marginTop: 6,
      fontSize: 18,
      textAlignVertical: "center",
      textAlign: "center",
      fontFamily: "Montserrat-LightItalic",
    },
    headerIcon: {
      color: theme.PRIMARY_BUTTON_COLOR,
      marginRight: 22,
    },
    scrollArea: {
      backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
    },
  });

export default Home;
