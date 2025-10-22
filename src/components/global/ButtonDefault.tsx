import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import { ButtonDefaultProps } from "@/src/types/ButtonDefaultProps";
import { Text, TouchableOpacity } from "react-native";
import { buttonDefaultStyle } from "./ButtonDefault.styles";

export default function ButtonDefault({
  press,
  textDefault,
  textPressed,
  setStatus,
}: ButtonDefaultProps) {
  const { colors } = useTheme();
  const style = buttonDefaultStyle(colors, press);

  const startCount = () => {
    setTimeout(() => {
      console.log("15 seg");
    }, 3000);
  };

  const handlePress = () => {
    if (!press) {
      startCount();
    }
    setStatus(!press);
  };
  return (
    <TouchableOpacity onPress={handlePress} style={style.touchable}>
      <Text style={[typography(colors).body1, style.text]}>
        {press ? textPressed : textDefault}
      </Text>
    </TouchableOpacity>
  );
}
