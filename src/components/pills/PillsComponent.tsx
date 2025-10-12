import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";

import { Text, TouchableOpacity, View } from "react-native";

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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            columnGap: 10,
          }}
        >
          <FontAwesome5
            name="pills"
            size={17}
            color={`${colors.primary.background}`}
          />
          <Text style={typography(colors).body2}>50 mg</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            columnGap: 10,
          }}
        >
          <FontAwesome5
            name="clock"
            size={17}
            color={`${colors.primary.background}`}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              columnGap: 10,
              width: "auto",
            }}
          >
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
        <TouchableOpacity
          onPress={() => setTook(!took)}
          style={{
            backgroundColor: `${
              took ? colors.light.background : colors.primary.background
            }`,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={[
              typography(colors).body1,
              {
                color: `${took ? colors.paper.text : colors.dark.text}`,
                textAlign: "center",
              },
            ]}
          >
            {took ? "Desfazer" : "Tomar remédio"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
