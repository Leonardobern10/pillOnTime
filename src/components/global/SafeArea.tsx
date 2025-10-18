import { ThemeProps } from "@/src/theme/ThemeProps";
import { ReactElement } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SafeArea({
  children,
  colors,
}: {
  children: ReactElement;
  colors: ThemeProps;
}) {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: colors.light.background,
      }}
    >
      {children}
    </SafeAreaView>
  );
}
