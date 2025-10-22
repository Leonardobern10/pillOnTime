import InputString from "@/src/components/global/InputString";
import ListPills from "@/src/components/listPills/listPills";
import { useTheme } from "@/src/theme/ThemeProvider";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PillsStyle } from "./Pills.style";

export default function Pills({ navigation }: any) {
  const [searchText, setSearchText] = useState<string>("");
  const { colors } = useTheme();
  const pillStyle = PillsStyle(colors);
  return (
    <SafeAreaView style={pillStyle.safeAreaStyle}>
      <View style={pillStyle.containerInputStyle}>
        <InputString
          value={searchText}
          onChangeText={(value) => setSearchText(value)}
          label="Pesquisar"
          placeholder="Digite o nome do remédio"
        />
      </View>
      <ScrollView style={pillStyle.scrollStyle}>
        <ListPills onList />
      </ScrollView>
    </SafeAreaView>
  );
}
