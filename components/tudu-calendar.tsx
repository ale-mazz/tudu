import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setSelectedDay } from "../redux/actions/item.actions/actions";

LocaleConfig.locales["it"] = {
  monthNames: [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ],
  monthNamesShort: [
    "Gen.",
    "Feb.",
    "Mar",
    "Apr",
    "Mag",
    "Giu.",
    "Lug.",
    "Ago.",
    "Set.",
    "Ott.",
    "Nov.",
    "Dic.",
  ],
  dayNames: [
    "Domenica",
    "Lunedi",
    "Martedi",
    "Mercoledi",
    "Giovedi",
    "Venerdi",
    "Sabato",
  ],
  dayNamesShort: ["Dom.", "Lun.", "Mar.", "Mer.", "Gio.", "Ven.", "Sab."],
  today: "Oggi",
};
LocaleConfig.defaultLocale = "it";

const TuduCalendar = () => {
  const { selectedDay } = useSelector((state: RootState) => state.day);
  let [datePressed, setDatePressed] = React.useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const dateObject = {
      [selectedDay]: {
        selected: true,
        selectedColor: "cornflowerblue",
      },
    };
    setDatePressed(dateObject);
  }, [selectedDay]);

  return (
    <View style={styles.container}>
      <StatusBar />
      <SafeAreaView style={styles.safeArea}>
        <Calendar
          markedDates={datePressed}
          initialDate={selectedDay}
          onDayPress={(day) => {
            dispatch(setSelectedDay(day.dateString));
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  safeArea: {
    paddingTop: Platform.OS === "android" ? 26 : 0,
    backgroundColor: "white",
  },
});

export default TuduCalendar;
