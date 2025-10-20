import { ThemeProps } from "@/src/theme/ThemeProps";
import { StyleSheet } from "react-native";

export const PillsComponenteStyle = (colors: ThemeProps) =>
  StyleSheet.create({
    viewContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      minHeight: 260,
      justifyContent: "space-between",
      padding: 20,
      boxShadow: `-4px 0px 1px ${colors.primary.background}`,
      borderRadius: 10,
      backgroundColor: `${colors.paper.background}`,
    },
    flexStartView: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      columnGap: 10,
    },
    flexRowBetweenView: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      columnGap: 10,
      width: "auto",
    },
    pressableStyle: {},
  });
