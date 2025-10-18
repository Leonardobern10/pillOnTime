import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";

import { Text, View } from "react-native";
import ButtonDefault from "../global/ButtonDefault";
import { PillsComponenteStyle } from "./PillsComponent.style";

export default function PillsComponent() {
  const [took, setTook] = useState<boolean>(false);
  const { colors } = useTheme();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: 260,
        justifyContent: "space-between",
        padding: 20,
        boxShadow: `-4px -1px 1px ${colors.primary.background}`,
        borderRadius: 10,
        backgroundColor: `${colors.paper.background}`,
      }}
    >
      <View>
        <Text style={typography(colors).heading2}>Losartana Potássica</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <View style={PillsComponenteStyle(colors).flexStartView}>
          <FontAwesome5
            name="pills"
            size={17}
            color={`${colors.primary.background}`}
          />
          <Text style={typography(colors).body2}>50 mg</Text>
        </View>
        <View style={PillsComponenteStyle(colors).flexStartView}>
          <FontAwesome5
            name="clock"
            size={17}
            color={`${colors.primary.background}`}
          />
          <View style={PillsComponenteStyle(colors).flexRowBetweenView}>
            <Text style={typography(colors).body2}>Próxima dose: </Text>
            <Text style={typography(colors).heading1}>20:30</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: `${colors.paper.background}`,
          padding: 10,
          borderRadius: 10,
          width: 120,
        }}
      >
        <Text style={typography(colors).body2}>1 vez ao dia</Text>
      </View>
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
