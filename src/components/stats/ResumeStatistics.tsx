import { View } from "react-native";
import { resumeStatsData } from "../../data/resumeStatsData";
import Resume from "./Resume";

export default function ResumeStatistics() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        columnGap: 5,
        rowGap: 10,

        width: "100%",
      }}
    >
      {resumeStatsData.map((item) => (
        <Resume
          key={item.index}
          index={item.index}
          title={item.title}
          value={item.value}
          icon={item.icon}
          colorIcon={item.colorIcon}
          unid={item.unid}
        />
      ))}
    </View>
  );
}
