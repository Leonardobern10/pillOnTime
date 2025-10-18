import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import { SelectProps } from "@/src/types/SelectProps";
import { Picker } from "@react-native-picker/picker";
import { Text, View } from "react-native";
import { inputStyle } from "./Input.style";

export default function Select({
  selectData,
  selectValue,
  setSelectValue,
  label,
}: SelectProps) {
  const { colors } = useTheme();

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 2,
      }}
    >
      <Text style={[typography(colors).body1, inputStyle(colors).label]}>
        {label}
      </Text>
      <Picker
        style={inputStyle(colors).style}
        selectedValue={selectValue}
        onValueChange={(itemValue) => setSelectValue(itemValue)}
        placeholder="Selecione a frequência"
      >
        {selectData.map((el) =>
          typeof el === "string" ? (
            <Picker.Item label={el} value={el} key={el} />
          ) : (
            <Picker.Item label={el.title} value={el.title} key={el.id} />
          )
        )}
      </Picker>
    </View>
  );
}
