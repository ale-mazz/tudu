import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions/item.actions/actions";
import { Item } from "../redux/types/types";
import { Ionicons } from "@expo/vector-icons";
import Emoji from "react-native-emoji";

type Props = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
};

export const AddItemModal: React.FC<Props> = ({
  modalVisible,
  setModalVisible,
}) => {
  const dispatch = useDispatch();

  const [inputText, setInputText] = React.useState("");

  const addTuduItem = (itemText: string) => {
    const newItem: Item = {
      text: itemText,
      completed: false,
      color: getRandomColor(),
    };
    dispatch(addItem(newItem));
  };

  const onSuccessfulCloseModal = () => {
    setInputText("");
    addTuduItem(inputText);
    setModalVisible(false);
  };

  const onCloseModal = () => {
    setInputText("");
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent={modalVisible}
      visible={modalVisible}
      onRequestClose={() => onCloseModal()}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={() => onCloseModal()}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={{ marginRight: 4, fontFamily: "Montserrat-Regular" }}>
              Aggiungi un nuovo tudu!
            </Text>
            <Emoji name="blush" style={{ fontSize: 18 }} />
          </View>
          <View style={styles.modalContentView}>
            <TextInput
              autoCorrect={true}
              autoFocus={true}
              multiline={true}
              style={styles.textInput}
              placeholder={"Tudu ..."}
              maxLength={120}
              textAlign={"left"}
              onChangeText={(text) => setInputText(text)}
            />
            <TouchableOpacity
              disabled={inputText.length < 1}
              style={
                inputText
                  ? styles.confirmActiveButton
                  : styles.confirmDisabledButton
              }
              onPress={() => onSuccessfulCloseModal()}
            >
              <Ionicons
                name="ios-add-circle-outline"
                size={36}
                color="cornflowerblue"
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

function getRandomColor() {
  const color1 = "#FF6F00";
  const color2 = "#FDD835";
  const color3 = "#64FFDA";
  const color4 = "#84FFFF";
  const color5 = "#448AFF";
  const color6 = "#448AFF";
  const color7 = "#FF5252";
  const color8 = "#BA68C8";
  const colors = [
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,
    color7,
    color8,
  ];
  return colors[Math.floor(Math.random() * 8)];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  modalHeader: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContentView: {
    marginTop: 12,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  confirmActiveButton: {
    marginRight: 18,
  },
  confirmDisabledButton: {
    marginRight: 18,
    opacity: 0.2,
  },
  textInput: {
    width: "100%",
    marginLeft: 18,
    marginRight: 18,
    flexShrink: 1,
    flexGrow: 1,
    borderBottomWidth: 1,
    borderBottomColor: "cornflowerblue",
    textAlignVertical: "top",
  },
});
