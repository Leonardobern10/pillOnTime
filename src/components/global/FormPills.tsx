import { selectItems } from "@/src/data/selectFreqData";
import { generateHours } from "@/src/services/generateHours";
import { getOnePill } from "@/src/services/pillService";
import { usePillsStore } from "@/src/store/pillsStore";
import { ThemeProps } from "@/src/theme/ThemeProps";
import { useTheme } from "@/src/theme/ThemeProvider";
import { InitDataFormType } from "@/src/types/InitDataFormType";
import { PillDataFormProps } from "@/src/types/PillDataFormProps";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonDefault from "./ButtonDefault";
import InputString from "./InputString";
import Select from "./Select";

export default function FormPills({
  id,
  name,
  quantity,
  freq,
  hour,
  obs,
  update,
}: InitDataFormType) {
  const { colors } = useTheme(); // Obtém as cores do tema
  const { addPill, updatePill } = usePillsStore();

  const [dataForm, setDataForm] = useState<PillDataFormProps>({
    id: id ? id : undefined,
    name: name ? name : "",
    quantity: quantity ? quantity : "",
    freq: freq ? freq : "",
    hour: hour ? hour : "",
    obs: obs ? obs : "",
  });

  useEffect(() => {
    const loadPill = async () => {
      if (update && id) {
        const pill = await getOnePill(id);
        if (pill) setDataForm(pill);
      }
    };
    loadPill();
  }, [update, id]);

  const submit = async () => {
    if (update && dataForm.id) {
      await updatePill(dataForm.id, dataForm);
    } else {
      await addPill(dataForm);
    }

    // Limpa o formulário após salvar
    setDataForm({
      id: undefined,
      name: "",
      quantity: "",
      freq: "",
      hour: "",
      obs: "",
    });
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
          textDefault={update ? "Atualizar" : "Adicionar"}
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
