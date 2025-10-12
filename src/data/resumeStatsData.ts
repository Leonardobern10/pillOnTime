import { lightTheme } from "../theme/theme";
import { ResumeProps } from "../types/ResumeProps";

export const resumeStatsData: ResumeProps[] = [
  {
    index: "001",
    title: "Medicamentos",
    value: 8,
    icon: "pills",
    colorIcon: `${lightTheme.primary.background}`,
  },
  {
    index: "002",
    title: "Hoje",
    value: 5,
    icon: "check",
    colorIcon: `${lightTheme.success.background}`,
    unid: 6,
  },
  {
    index: "003",
    title: "Pendentes",
    value: 1,
    icon: "alert",
    colorIcon: `${lightTheme.alert.text}`,
  },
  {
    index: "004",
    title: "Sequência",
    value: 12,
    icon: "calendar",
    colorIcon: `${lightTheme.secondary.background}`,
  },
];
