import NullPills from "@/src/components/global/NullPills";
import PillsComponent from "@/src/components/pills/PillsComponent";
import ResumeStatistics from "@/src/components/stats/ResumeStatistics";
import { delPill } from "@/src/services/pillService";
import { usePillsStore } from "@/src/store/pillsStore";
import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { headerStyle } from "./home.styles";

// 👉 Componente principal que usa o tema
export const Home = () => {
  const { theme, colors, toggleTheme } = useTheme();
  const style = headerStyle(colors);
  const { pills, loadPillsToday, count } = usePillsStore();

  useFocusEffect(
    useCallback(() => {
      loadPillsToday();
    }, [])
  );

  return (
    <SafeAreaView style={style.safeArea}>
      {/* Header */}
      <View style={style.headerContainer}>
        <View>
          <Text style={typography(colors).companyName}>Pill On Time</Text>
          <Text style={typography(colors).caption}>
            Seus medicamentos em dia
          </Text>
        </View>

        <View style={style.headerContainerIcons}>
          <AntDesign
            name="bell"
            size={30}
            color={colors.paper.text}
            style={style.iconStyle}
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
              style={style.iconStyle}
            />
          </Pressable>
        </View>
      </View>

      {/* Conteúdo */}
      <ScrollView style={style.scrollStyle}>
        <ResumeStatistics countPills={count} />
        <View style={style.pillsGroup}>
          {pills.length === 0 || !pills ? (
            <View style={style.containerNullPills}>
              <NullPills />
              <Text style={typography(colors).body1}>
                Sem remédios para hoje
              </Text>
            </View>
          ) : (
            pills?.map((el, index) => (
              <PillsComponent
                id={el.id}
                key={index}
                name={el.name}
                quantity={el.quantity}
                freq={el.freq}
                hour={el.hour}
                obs={el.obs}
                delPill={(id) => delPill(id)}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
