import { StyleSheet, Text, View } from "react-native";

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text>Calendario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Calendar;
