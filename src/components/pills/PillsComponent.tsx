import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import { PillType } from "@/src/types/PillType";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ButtonDefault from "../global/ButtonDefault";
import { PillsComponenteStyle } from "./PillsComponent.style";

export default function PillsComponent({
  id,
  name,
  quantity,
  freq,
  hour,
  obs,
  delPill,
}: PillType) {
  const [took, setTook] = useState<boolean>(false);
  const { colors } = useTheme();
  const style = PillsComponenteStyle(colors);

  return (
    <View style={style.viewContainer}>
      <View
        style={{
          width: 30,
          height: 30,
          position: "absolute",
          right: 10,
          top: 12,
        }}
      >
        <TouchableOpacity
          style={{ width: "100%", height: "100%" }}
          onPress={() => delPill(id!)}
        >
          <MaterialCommunityIcons
            name="delete-outline"
            size={30}
            color="rgba(46, 45, 45, 0.56)"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={typography(colors).heading2}>{name}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <View style={style.flexStartView}>
          <FontAwesome5
            name="pills"
            size={17}
            color={`${colors.primary.background}`}
          />
          <Text style={typography(colors).body2}>{quantity}</Text>
        </View>
        <View style={style.flexStartView}>
          <FontAwesome5
            name="clock"
            size={17}
            color={`${colors.primary.background}`}
          />
          <View style={style.flexRowBetweenView}>
            <Text style={typography(colors).body2}>Próxima dose: </Text>
            <Text style={typography(colors).heading1}>{hour}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: `${colors.light.background}`,
          padding: 5,
          borderRadius: 30,
          width: "35%",
          opacity: 0.7,
        }}
      >
        <Text
          style={[
            typography(colors).body2,
            { textAlign: "center", color: colors.paper.text },
          ]}
        >
          {freq}
        </Text>
      </View>
      {obs && (
        <View
          style={{
            backgroundColor: `${colors.paper.background}`,
            padding: 10,
            borderRadius: 10,
            width: 120,
          }}
        >
          <Text style={typography(colors).body2}>{obs}</Text>
        </View>
      )}
      <View>
        <ButtonDefault
          textDefault="Tomar remédio"
          textPressed="Desfazer"
          setStatus={setTook}
          press={took}
        />
      </View>
    </View>
  );
}
