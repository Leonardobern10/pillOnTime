import { ThemeProps } from "../theme/ThemeProps";
import { TabStyleType } from "../types/TabStyleType";
import { Pressable } from "react-native";

export const tabOptions = (
  title: string,
  backFunction: () => void,
  colors: ThemeProps,
  style: TabStyleType
) => ({
  title: title,
  headerLeft: () => (
    <Pressable onPress={backFunction} style={style.arrowBack}>
      <FontAwesome5 name="arrow-left" size={18} color={colors.primary.text} />
    </Pressable>
  ),
});
