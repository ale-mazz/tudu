import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { Item } from "../redux/types/types";
import { removeItem, updateItem } from "../redux/actions/item.actions/actions";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";

type Props = {
  item: Item;
  index: number;
};

export const Tudu: React.FC<Props> = ({ item, index }) => {
  const [menuOpened, setMenuOpened] = React.useState(false);

  const dispatch = useDispatch();

  const onDeleteItem = (index: number) => {
    dispatch(removeItem(index));
    setMenuOpened(false);
  };

  const onUpdateItem = (item: Item, index: number) => {
    dispatch(updateItem(item, index));
  };

  const setDeleting = () => {
    setMenuOpened(true);
  };

  return (
    <View>
      <View style={styles(item).item}>
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: item.color,
            borderRadius: 20,
            marginRight: 12,
            marginLeft: 8,
          }}
        />
        <TouchableOpacity
          style={styles(item).text}
          onLongPress={(event) => setDeleting()}
        >
          <Text style={styles(item).text}>{item.text}</Text>
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
      <Menu opened={menuOpened} onBackdropPress={() => setMenuOpened(false)}>
        <MenuTrigger />
        <MenuOptions customStyles={optionsStyles}>
          <MenuOption value={1} onSelect={() => onDeleteItem(index)}>
            <Text style={styles(item).menuOptionText}>Elimina tudu ..</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

const optionsStyles = {
  OptionTouchableComponent: TouchableOpacity,
  optionsContainer: {
    padding: 5,
    borderRadius: 10,
  },
  optionTouchable: {
    activeOpacity: 0.3,
  },
};

const styles = (item: Item) =>
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
      marginLeft: 0,
      marginRight: 12,
      fontFamily: "Montserrat-Regular",
      fontSize: 16,
      flexShrink: 1,
      flexGrow: 1,
      textDecorationLine: item.completed ? "line-through" : "none",
      opacity: item.completed ? 0.3 : 1,
    },
    menuOptionText: {
      fontFamily: "Montserrat-Regular",
      fontSize: 14,
      textAlign: "center",
      color: "black",
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
