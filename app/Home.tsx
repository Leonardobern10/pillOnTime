import PillsComponent from "@/src/components/pills/PillsComponent";
import ResumeStatistics from "@/src/components/stats/ResumeStatistics";
import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// 👉 Componente principal que usa o tema
export const Home = () => {
  const { theme, colors, toggleTheme } = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.light.background,
      }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          backgroundColor: colors.paper.background,
          padding: 20,
        }}
      >
        <View>
          <Text style={typography(colors).companyName}>Pill On Time</Text>
          <Text style={typography(colors).caption}>
            Seus medicamentos em dia
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
          }}
        >
          <AntDesign
            name="bell"
            size={30}
            color={colors.paper.text}
            style={{ opacity: 0.5 }}
          />
          <Pressable
            onPress={() => {
              console.log("Tema alterado: ", theme);
              toggleTheme();
            }}
          >
            <AntDesign
              name={theme === "dark" ? "moon" : "sun"}
              size={30}
              color={colors.paper.text}
              style={{ opacity: 0.5 }}
            />
          </Pressable>
        </View>
      </View>

      {/* Conteúdo */}
      <ScrollView style={{ padding: 20 }}>
        <ResumeStatistics />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            paddingTop: 20,
            marginBottom: 20,
            rowGap: 20,
          }}
        >
          <PillsComponent />
          <PillsComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
