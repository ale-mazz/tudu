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
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { AddItemModal } from "./add-item-modal";
import { Item } from "../redux/types/types";
import Tudu from "./tudu";
import { useSelector } from "react-redux";
import { RootState } from "../redux";

const Home: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { items } = useSelector((state: RootState) => state.items);

  const onOpenModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerText}>tudu</Text>
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
        {items.map((item: Item, index: number) => (
          <Tudu key={item.text + "_" + index} item={item} index={index} />
        ))}

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
