import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { AddItemModal } from "./add-item-modal";
import { Item } from "../redux/types/types";
import Tudu from "./tudu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setSelectedDay } from "../redux/actions/item.actions/actions";
import moment from "moment";
import "moment/locale/it";

const Home: React.FC = () => {
  moment.locale("it");

  const [modalVisible, setModalVisible] = React.useState(false);
  const { items } = useSelector((state: RootState) => state.items);
  const { selectedDay } = useSelector((state: RootState) => state.day);
  const dispatch = useDispatch();

  const onOpenModal = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    console.log(selectedDay);
    console.log(items);
    if (!selectedDay) {
      dispatch(setSelectedDay(moment(new Date()).format("YYYY-MM-DD")));
    }
  }, [selectedDay]);

  return (
    <View style={styles.container}>
      <StatusBar />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerText}>tudu</Text>
          <Text style={styles.dayText}>{moment(selectedDay).format("LL")}</Text>
          <TouchableOpacity onPress={() => onOpenModal()}>
            <AntDesign
              style={styles.headerIcon}
              name="plus"
              size={28}
              color="cornflowerblue"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView style={styles.scrollArea}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    paddingTop: Platform.OS === "android" ? 26 : 0,
    backgroundColor: "white",
  },

  header: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  headerText: {
    fontSize: 28,
    marginLeft: 22,
    marginTop: 12,
    fontFamily: "Montserrat-Medium",
  },

  dayText: {
    fontSize: 14,
    marginTop: 20,
    textAlignVertical: "center",
    textAlign: "center",
    fontFamily: "Montserrat-LightItalic",
  },

  headerIcon: {
    marginRight: 22,
    marginTop: 12,
  },

  scrollArea: {
    backgroundColor: "white",
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
});

export default Home;
