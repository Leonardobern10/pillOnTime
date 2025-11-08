import { useTheme } from "@/src/theme/ThemeProvider";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router, Tabs } from "expo-router";
import { Pressable } from "react-native";

export default function TabNavigation() {
  const { colors } = useTheme();
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
          else if (route.name === "Pills/index") iconName = "pills";
          else if (route.name === "Add/index") iconName = "plus";
          else if (route.name === "History/index") iconName = "history";

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
        name="Pills/index"
        options={{
          title: "Remédio",
          headerLeft: () => (
            <Pressable onPress={() => router.push("/")} style={{ padding: 8 }}>
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
        name="Add/index"
        options={{
          title: "Adicionar medicamento",
          headerLeft: () => (
            <Pressable onPress={() => router.push("/")} style={{ padding: 8 }}>
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
        name="History/index"
        options={{
          title: "Histórico",
          headerLeft: () => (
            <Pressable onPress={() => router.push("/")} style={{ padding: 8 }}>
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
