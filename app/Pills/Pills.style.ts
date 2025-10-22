import { ThemeProps } from "@/src/theme/ThemeProps";
import { StyleSheet } from "react-native";

export const PillsStyle = (colors: ThemeProps) =>
  StyleSheet.create({
    safeAreaStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: 10,
      width: "100%",
      flex: 1,
      padding: 20,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: colors.light.background,
    },
    containerInputStyle: {
      width: "100%",
      paddingLeft: 10,
      paddingRight: 10,
    },
    scrollStyle: {
      width: "100%",
      height: "100%",
      padding: 10,
    },
  });
