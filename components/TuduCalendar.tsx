import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setSelectedDay } from "../redux/actions/item.actions/actions";
import { customTheme } from "../theme";
import { switchTheme } from "../redux/actions/theme.actions/actions";

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
  const { theme } = useSelector((state: RootState) => state.theme);
  let [datePressed, setDatePressed] = React.useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const dateObject = {
      [selectedDay]: {
        selected: true,
        selectedColor: theme.PRIMARY_ACCENT_COLOR,
      },
    };
    setDatePressed(dateObject);
  }, [selectedDay]);

  return (
    <View style={styles(theme).container}>
      <StatusBar
        style={theme.STATUS_BAR_STYLE === "light" ? "light" : "dark"}
      />
      <SafeAreaView style={styles(theme).safeArea}>
        <Calendar
          key={theme.mode}
          theme={{
            calendarBackground: theme.PRIMARY_BACKGROUND_COLOR,
            monthTextColor: theme.PRIMARY_TEXT_COLOR,
            textSectionTitleColor: theme.PRIMARY_TEXT_COLOR,
            todayTextColor: theme.PRIMARY_ACCENT_COLOR,
            textDefaultColor: theme.PRIMARY_TEXT_COLOR,
            textDisabledColor: theme.PRIMARY_TEXT_COLOR,
            textInactiveColor: theme.PRIMARY_TEXT_COLOR,
            dayTextColor: theme.PRIMARY_TEXT_COLOR,
            selectedDayTextColor: theme.PRIMARY_BUTTON_TEXT_COLOR,
            arrowColor: theme.PRIMARY_ACCENT_COLOR,
            textDayFontFamily: "Montserrat-Medium",
            todayButtonFontFamily: "Montserrat-Medium",
            textMonthFontFamily: "Montserrat-Medium",
            textDayHeaderFontFamily: "Montserrat-Medium",
          }}
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

const styles = (theme: customTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
    },
    safeArea: {
      backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
    },
  });

export default TuduCalendar;
