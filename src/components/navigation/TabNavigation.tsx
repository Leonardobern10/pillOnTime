import { useTheme } from "@/src/theme/ThemeProvider";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";

export default function TabNavigation() {
  const { colors } = useTheme();
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={({ route }) => ({
        headerShown: false,
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
          else if (route.name === "Profile/index") iconName = "user-alt";

          return <FontAwesome5 name={iconName} size={20} color={`${color}`} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Início" }} />
      <Tabs.Screen name="Pills/index" options={{ title: "Remédio" }} />
      <Tabs.Screen name="Add/index" options={{ title: "Adicionar" }} />
      <Tabs.Screen name="History/index" options={{ title: "Histórico" }} />
      <Tabs.Screen name="Profile/index" options={{ title: "Perfil" }} />
    </Tabs>
  );
}
