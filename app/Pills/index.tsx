import InputString from "@/src/components/global/InputString";
import ListPills from "@/src/components/listPills/listPills";
import { useTheme } from "@/src/theme/ThemeProvider";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Pills({ navigation }: any) {
  const [searchText, setSearchText] = useState<string>("");
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={{
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
      }}
    >
      <View style={{ width: "100%", paddingLeft: 10, paddingRight: 10 }}>
        <InputString
          value={searchText}
          onChangeText={(value) => setSearchText(value)}
          label="Pesquisar"
          placeholder="Digite o nome do remédio"
        />
      </View>
      <ScrollView style={{ width: "100%", height: "100%", padding: 10 }}>
        <ListPills onList />
      </ScrollView>
    </SafeAreaView>
  );
}
