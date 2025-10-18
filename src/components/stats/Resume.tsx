import { darkTheme } from "@/src/theme/theme";
import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import { ResumeProps } from "@/src/types/ResumeProps";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Text, View } from "react-native";

export default function Resume({
  title,
  value,
  icon,
  colorIcon,
  unid,
}: ResumeProps) {
  const colorRender = colorIcon ? colorIcon : "black";
  const { colors } = useTheme();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 150,
        minWidth: 155,
        maxWidth: "auto",
        borderRadius: 10,
        backgroundColor: `${colors.paper.background}`,
        padding: 15,
        paddingTop: 10,
        paddingBottom: 20,
        boxShadow: `${
          colors === darkTheme
            ? `1px 1px 1px #dddddd68, -1px 1px 1px #dddddd68, 1px -1px 1px #dddddd68, -1px -1px 1px #dddddd68`
            : `-1px -1px 1px ${colors.primary.background}`
        }`,
      }}
    >
      <View>
        <Text style={typography(colors).heading3}>{title}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={[typography(colors).heading1, { width: "auto" }]}>
          {value}
        </Text>
        {icon === "pills" ? (
          <FontAwesome5 name="pills" size={30} color={colorRender} />
        ) : (
          <AntDesign name={icon} size={30} color={colorRender} />
        )}
      </View>
      <View>
        {unid && <Text style={typography(colors).caption}>{unid} doses</Text>}
      </View>
    </View>
  );
}
