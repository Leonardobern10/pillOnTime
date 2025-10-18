import { ThemeProps } from "@/src/theme/ThemeProps";
import { StyleSheet } from "react-native";

export const inputStyle = (colors: ThemeProps) =>
  StyleSheet.create({
    style: {
      backgroundColor: colors.paper.background,
      boxShadow: `1px 1px 1px ${colors.dark.text}, -1px 1px 1px ${colors.dark.text},1px -1px 1px ${colors.dark.text},-1px -1px 1px ${colors.dark.text}`,
      width: "100%",
      borderRadius: 10,
      paddingLeft: 10,
    },
    label: {
      color: colors.paper.text,
    },
  });
