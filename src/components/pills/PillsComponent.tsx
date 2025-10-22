import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import { PillType } from "@/src/types/PillType";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import ButtonDefault from "../global/ButtonDefault";
import FormPills from "../global/FormPills";
import { PillsComponenteStyle } from "./PillsComponent.style";

export default function PillsComponent({
  id,
  name,
  quantity,
  freq,
  hour,
  obs,
  delPill,
  updatePill,
  onList,
}: PillType) {
  const [took, setTook] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  const style = PillsComponenteStyle(colors);

  return (
    <View style={style.viewContainer}>
      {onList && (
        <View
          style={{
            position: "absolute",
            right: 0,
            top: -27,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              width: "auto",
              height: "100%",
              backgroundColor: colors.paper.background,
              borderRadius: 5,
            }}
            onPress={() => delPill(id!)}
          >
            <MaterialCommunityIcons
              name="delete-outline"
              size={30}
              color="rgba(46, 45, 45, 0.56)"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "auto",
              height: "100%",
              backgroundColor: colors.paper.background,
              borderRadius: 5,
            }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <MaterialCommunityIcons
              name="pencil-box-outline"
              size={30}
              color="rgba(46, 45, 45, 0.56)"
            />
          </TouchableOpacity>
        </View>
      )}
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
        {/* Será exibir no lugar do botão a hora que o remedio foi tomado */}
        {!onList && (
          <ButtonDefault
            textDefault="Tomar remédio"
            textPressed="Desfazer"
            setStatus={setTook}
            press={took}
          />
        )}
      </View>
      {onList && (
        <Modal
          animationType="fade"
          visible={modalVisible}
          backdropColor={colors.paper.background}
          onRequestClose={() => setModalVisible(!modalVisible)}
          style={{
            height: 120,
            width: 120,
            boxShadow: "1px 1px 1px solid yellow",
          }}
        >
          <FormPills
            update={true} // 👈 indica modo de atualização
            id={id!} // 👈 envia o id real para o update
            name={name}
            quantity={quantity}
            freq={freq}
            hour={hour}
            obs={obs}
          />
        </Modal>
      )}
    </View>
  );
}
