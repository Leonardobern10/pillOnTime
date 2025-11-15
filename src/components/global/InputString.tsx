import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import { InputProps } from "@/src/types/InputProps";
import { Text, TextInput, View } from "react-native";
import { inputStyle } from "./Input.style";

export default function InputString({
  value,
  onChangeText,
  placeholder,
  boxText,
  keyboardType,
  label,
}: InputProps) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 15,
      }}
    >
      <Text style={[typography(colors).body1, inputStyle(colors).label]}>
        {label}
      </Text>
      <TextInput
        style={inputStyle(colors).style}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        multiline={boxText}
        editable={boxText}
        numberOfLines={boxText ? 10 : undefined}
        cursorColor={colors.paper.text}
        keyboardType={keyboardType ?? "default"}
        placeholderTextColor={colors.primary.text}
        selectionColor={colors.primary.background}
      />
    </View>
  );
}
