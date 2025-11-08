import { useEffect } from "react";
import { PillDataFormProps } from "../types/PillDataFormProps";

export const useFormPills = (
  update: boolean | undefined,
  id: number | undefined,
  getOnePill: (id: number) => Promise<PillDataFormProps | null>,
  setDataForm: (value: PillDataFormProps) => void,
  dataForm: PillDataFormProps,
  updatePill: (id: number, newData: PillDataFormProps) => Promise<void>,
  addPill: (pill: PillDataFormProps) => Promise<void>
) => {
  useEffect(() => {
    const loadPill = async () => {
      if (update && id) {
        const pill = await getOnePill(id);
        if (pill) setDataForm(pill);
      }
    };
    loadPill();
  }, [update, id, getOnePill, setDataForm]);

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
      date: new Date().toLocaleDateString("en-CA"),
      obs: "",
    });
  };
};
