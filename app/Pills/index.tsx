import InputString from "@/src/components/global/InputString";
import ListPills from "@/src/components/listPills/listPills";
import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Pills({ navigation }: any) {
  const [searchText, setSearchText] = useState<string>("");
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
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <InputString
        value={searchText}
        onChangeText={(value) => setSearchText(value)}
        label="Pesquisar"
        placeholder="Digite o nome do remédio"
      />
      <ScrollView style={{ width: "100%", height: "100%", padding: 10 }}>
        <ListPills />
      </ScrollView>
    </SafeAreaView>
  );
}
