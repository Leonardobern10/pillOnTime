import ButtonDefault from "@/src/components/global/ButtonDefault";
import InputString from "@/src/components/global/InputString";
import Select from "@/src/components/global/Select";
import { selectItems } from "@/src/data/selectFreqData";
import { generateHours } from "@/src/services/generateHours";
import { PillDataFormProps } from "@/src/types/PillDataFormProps";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Add({ navigation }: any) {
  const initDefault = {
    name: "",
    quantity: "",
    freq: "",
    hour: "",
    obs: "",
  };
  const [dataForm, setDataForm] = useState<PillDataFormProps>(initDefault);

  const test = (value: boolean) => {
    console.log(dataForm);
    setDataForm(initDefault);
  };

  return (
    <SafeAreaView>
      <View style={addStyle.container}>
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
          value={dataForm.obs}
          boxText
          placeholder="Ex. Tomar com alimentos"
          label="Observações (opcional)"
        />
        <ButtonDefault
          textDefault="Adicionar"
          textPressed="Desfazer"
          setStatus={test}
          press={false}
        />
      </View>
    </SafeAreaView>
  );
}

const addStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    rowGap: 10,
    height: "100%",
    padding: 20,
  },
});
