import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "../redux/types/types";
import { removeItem, updateItem } from "../redux/actions/item.actions/actions";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Feather } from "@expo/vector-icons";
import { RootState } from "../redux";
import { customTheme } from "../theme";

type Props = {
  item: Item;
  index: number;
};

export const Tudu: React.FC<Props> = ({ item, index }) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const onDeleteItem = (index: number) => {
    dispatch(removeItem(index));
  };

  const onUpdateItem = (item: Item, index: number) => {
    dispatch(updateItem(item, index));
  };

  const renderTrashButton = (index: number) => {
    return (
      <TouchableOpacity
        onPress={() => onDeleteItem(index)}
        style={styles(item, theme).iconContainer}
      >
        <Feather name="trash-2" size={30} color={theme.PRIMARY_ACCENT_COLOR} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles(item, theme).shadowContainer}>
      <GestureHandlerRootView>
        <Swipeable renderRightActions={() => renderTrashButton(index)}>
          <View style={styles(item, theme).item}>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: item.color,
                borderRadius: 20,
                marginRight: 12,
                marginLeft: 8,
              }}
            />
            <View style={styles(item, theme).text}>
              <Text style={styles(item, theme).text}>{item.text}</Text>
            </View>
            <BouncyCheckbox
              isChecked={item.completed}
              fillColor={theme.PRIMARY_BUTTON_COLOR}
              iconStyle={{
                borderWidth: 2,
                borderRadius: 11,
              }}
              onPress={() => onUpdateItem(item, index)}
            />
          </View>
        </Swipeable>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = (item: Item, theme: customTheme) =>
  StyleSheet.create({
    shadowContainer: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.18,
      shadowRadius: 6.68,
    },

    item: {
      paddingVertical: 16,
      marginVertical: 10,
      marginHorizontal: 4,
      borderRadius: 10,
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.SECONDARY_BACKGROUND_COLOR,
      elevation: 5,
    },
    text: {
      color: theme.PRIMARY_TEXT_COLOR,
      marginLeft: 0,
      marginRight: 12,
      fontFamily: "Montserrat-Regular",
      fontSize: 18,
      flexShrink: 1,
      flexGrow: 1,
      textDecorationLine: item.completed ? "line-through" : "none",
      opacity: item.completed ? 0.3 : 1,
    },
    deleteButtonText: {
      textAlign: "center",
      marginLeft: 8,
      marginRight: 12,
      fontFamily: "Montserrat-Bold",
      fontSize: 16,
    },
    undoIcon: {
      paddingRight: 12,
    },
    iconContainer: {
      width: 50,
      height: 40,
      marginVertical: 10,
      marginTop: 20,
      right: "2%",
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default Tudu;
