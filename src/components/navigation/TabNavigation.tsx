import { ThemeProps } from "@/src/theme/ThemeProps";
import { useTheme } from "@/src/theme/ThemeProvider";
import { TabStyleType } from "@/src/types/TabStyleType";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { router, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { tabStyle } from "./TabNavigation.style";

export default function TabNavigation() {
  const { colors } = useTheme();
  const handleBack = () => router.push("/");

  const tabOptions = (
    title: string,
    backFunction: () => void,
    colors: ThemeProps,
    style: TabStyleType
  ) => ({
    title: title,
    headerLeft: () => (
      <Pressable onPress={backFunction} style={style.arrowBack}>
        <FontAwesome5 name="arrow-left" size={18} color={colors.primary.text} />
      </Pressable>
    ),
  });

  const chooseIcon = (
    color: ThemeProps,
    route: RouteProp<ParamListBase, string>
  ) => {
    let iconName;

    if (route.name === "index") iconName = "home";
    else if (route.name === "Pills") iconName = "pills";
    else if (route.name === "Add") iconName = "plus";
    else if (route.name === "History") iconName = "history";

    return <FontAwesome5 name={iconName} size={20} color={`${color}`} />;
  };

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={({ route }) => ({
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
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Pills"
        options={tabOptions("Remédio", handleBack, colors, tabStyle)}
      />
      <Tabs.Screen
        name="Add"
        options={tabOptions("Adicionar", handleBack, colors, tabStyle)}
      />
      <Tabs.Screen
        name="History"
        options={tabOptions("Histórico", handleBack, colors, tabStyle)}
      />
    </Tabs>
  );
}
