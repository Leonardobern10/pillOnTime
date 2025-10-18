import { SelectFreqType } from "./SelectFreqType";

export type SelectProps<T = SelectFreqType | string> = {
  selectData: Array<T>;
  selectValue: string;
  setSelectValue: (value: string) => void;
  label: string;
};
