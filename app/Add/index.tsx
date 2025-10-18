import ButtonDefault from "@/src/components/global/ButtonDefault";
import InputString from "@/src/components/global/InputString";
import Select from "@/src/components/global/Select";
import { selectItems } from "@/src/data/selectFreqData";
import { generateHours } from "@/src/services/generateHours";
import { addPill } from "@/src/services/pillService";
import { ThemeProps } from "@/src/theme/ThemeProps";
import { useTheme } from "@/src/theme/ThemeProvider";
import { PillDataFormProps } from "@/src/types/PillDataFormProps";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Add({ navigation }: any) {
  const { colors } = useTheme();
  const initDefault = {
    name: "",
    quantity: "",
    freq: "",
    hour: "",
    obs: "",
  };
  const [dataForm, setDataForm] = useState<PillDataFormProps>(initDefault);

  const submit = (value: boolean) => {
    addPill(dataForm);
    setDataForm(initDefault);
  };

  return (
    <SafeAreaView style={addStyle(colors).safeArea}>
      <View style={addStyle(colors).container}>
        <InputString
          onChangeText={(value: string) =>
            setDataForm({ ...dataForm, name: value })
          }
          value={dataForm.name}
          placeholder="Ex. Losartana Potássica"
          label="Nome do medicamento"
        />
        <InputString
          onChangeText={(value: string) =>
            setDataForm({ ...dataForm, quantity: value })
          }
          value={dataForm.quantity}
          placeholder="Ex. 50 mg"
          label="Dosagem"
        />
        <Select
          label="Frequência"
          selectData={selectItems}
          selectValue={dataForm.freq}
          setSelectValue={(value: string) =>
            setDataForm({ ...dataForm, freq: value })
          }
        />
        <Select
          label="Horas"
          selectData={generateHours(0, 23)}
          selectValue={dataForm.hour}
          setSelectValue={(value: string) =>
            setDataForm({ ...dataForm, hour: value })
          }
        />
        <InputString
          onChangeText={(value: string) =>
            setDataForm({ ...dataForm, obs: value })
          }
          value={dataForm.obs!}
          boxText
          placeholder="Ex. Tomar com alimentos"
          label="Observações (opcional)"
        />
        <ButtonDefault
          textDefault="Adicionar"
          textPressed="Desfazer"
          setStatus={submit}
          press={false}
        />
      </View>
    </SafeAreaView>
  );
}

const addStyle = (colors: ThemeProps) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      rowGap: 10,
      height: "100%",
      padding: 20,
    },
    safeArea: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "stretch",
      backgroundColor: colors.light.background,
      width: "100%",
    },
  });
