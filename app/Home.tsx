import PillsComponent from "@/src/components/pills/PillsComponent";
import ResumeStatistics from "@/src/components/stats/ResumeStatistics";
import { usePillsStore } from "@/src/store/pillsStore";
import { ThemeProps } from "@/src/theme/ThemeProps";
import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// 👉 Componente principal que usa o tema
export const Home = () => {
  const { theme, colors, toggleTheme } = useTheme();
  const style = headerStyle(colors);
  const { pills, loadPills, count } = usePillsStore();

  useFocusEffect(
    useCallback(() => {
      loadPills();
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
          {pills?.map((el, index) => (
            <PillsComponent
              key={index}
              name={el.name}
              quantity={el.quantity}
              freq={el.freq}
              hour={el.hour}
              obs={el.obs}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const headerStyle = (colors: ThemeProps) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.light.background,
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      backgroundColor: colors.paper.background,
      padding: 20,
    },
    headerContainerIcons: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: 10,
    },
    iconStyle: {
      opacity: 0.5,
    },
    scrollStyle: {
      padding: 20,
    },
    pillsGroup: {
      flexDirection: "column",
      justifyContent: "space-between",
      paddingTop: 20,
      marginBottom: 20,
      rowGap: 20,
    },
  });
