import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import { ButtonDefaultProps } from "@/src/types/ButtonDefaultProps";
import { useRef } from "react";
import { Text, TouchableOpacity } from "react-native";
import { buttonDefaultStyle } from "./ButtonDefault.styles";

export default function ButtonDefault({
  press,
  textDefault,
  textPressed,
  setStatus,
  onComplete,
}: ButtonDefaultProps) {
  const { colors } = useTheme();
  const style = buttonDefaultStyle(colors, press);
  const timeoutRef = useRef<number | null>(null);

  const startCount = () => {
    // Cancela qualquer contagem anterior
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      console.log("⏰ 15 segundos concluídos!");
      onComplete?.(); // dispara callback
    }, 15000); // 15 segundos
  };

  const cancelCount = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handlePress = () => {
    if (!press) {
      // Inicia contagem
      startCount();
    } else {
      // Usuário clicou em "Desfazer"
      cancelCount();
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
