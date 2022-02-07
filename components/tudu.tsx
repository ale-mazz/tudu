import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { Item } from "../redux/types/types";
import { removeItem, updateItem } from "../redux/actions/item.actions/actions";

type Props = {
  item: Item;
  index: number;
};

export const Tudu: React.FC<Props> = ({ item, index }) => {
  const [deleteButton, setDeleteButton] = React.useState(false);

  const dispatch = useDispatch();

  const onDeleteItem = (index: number) => {
    dispatch(removeItem(index));
    setDeleteButton(false);
  };

  const onUpdateItem = (item: Item, index: number) => {
    dispatch(updateItem(item, index));
  };

  const setDeleting = () => {
    setDeleteButton(true);
  };

  const undoDeleting = () => {
    setDeleteButton(false);
  };

  return deleteButton ? (
    <View style={styles(item.completed).item}>
      <TouchableOpacity onPress={(event) => onDeleteItem(index)}>
        <Text style={styles(item.completed).deleteButtonText}>Elimina!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(event) => undoDeleting()}>
        <MaterialCommunityIcons
          name="restore"
          size={30}
          color="cornflowerblue"
          style={styles(item.completed).undoIcon}
        />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles(item.completed).item}>
      <TouchableOpacity
        style={styles(item.completed).text}
        onLongPress={(event) => setDeleting()}
      >
        <Text style={styles(item.completed).text}>{item.text}</Text>
      </TouchableOpacity>
      <BouncyCheckbox
        isChecked={item.completed}
        fillColor="cornflowerblue"
        iconStyle={{
          borderColor: "cornflowerblue",
        }}
        onPress={() => onUpdateItem(item, index)}
      />
    </View>
  );
};

const styles = (isChecked: boolean) =>
  StyleSheet.create({
    item: {
      paddingTop: 12,
      paddingBottom: 12,
      borderRadius: 16,
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    text: {
      marginLeft: 8,
      marginRight: 12,
      fontFamily: "Montserrat-Regular",
      fontSize: 16,
      flexShrink: 1,
      textDecorationLine: isChecked ? "line-through" : "none",
      opacity: isChecked ? 0.3 : 1,
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
  });

export default Tudu;
