import { useTheme } from "@/src/theme/ThemeProvider";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router, Tabs } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

export default function TabNavigation() {
  const { colors } = useTheme();
  const handleBack = () => router.push("/");

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={({ route }) => ({
        headerShown: route.name !== "index",
        headerStyle: {
          backgroundColor: `${colors.primary.background}`,
        },
        headerTintColor: `${colors.primary.text}`,
        tabBarActiveTintColor: `${colors.primary.background}`,
        tabBarInactiveTintColor: `${colors.primary.text}`,
        tabBarStyle: {
          height: 90,
          paddingTop: 10,
          backgroundColor: `${colors.paper.background}`,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "index") iconName = "home";
          else if (route.name === "Pills") iconName = "pills";
          else if (route.name === "Add") iconName = "plus";
          else if (route.name === "History") iconName = "history";

          return <FontAwesome5 name={iconName} size={20} color={`${color}`} />;
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          headerShown: false, // 👈 garante que não tenha header aqui
        }}
      />
      <Tabs.Screen
        name="Pills"
        options={{
          title: "Remédio",
          headerLeft: () => (
            <Pressable onPress={handleBack} style={style.arrowBack}>
              <FontAwesome5
                name="arrow-left"
                size={18}
                color={colors.primary.text}
              />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="Add"
        options={{
          title: "Adicionar",
          headerLeft: () => (
            <Pressable onPress={handleBack} style={style.arrowBack}>
              <FontAwesome5
                name="arrow-left"
                size={18}
                color={colors.primary.text}
              />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="History"
        options={{
          title: "Histórico",
          headerLeft: () => (
            <Pressable onPress={handleBack} style={style.arrowBack}>
              <FontAwesome5
                name="arrow-left"
                size={18}
                color={colors.primary.text}
              />
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}

const style = StyleSheet.create({
  arrowBack: {
    padding: 8,
    paddingLeft: 20,
    paddingRight: 10,
  },
});
