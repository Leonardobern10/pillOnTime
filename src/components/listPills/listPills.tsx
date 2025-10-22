import { usePillsStore } from "@/src/store/pillsStore";
import { useTheme } from "@/src/theme/ThemeProvider";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { View } from "react-native";
import PillsComponent from "../pills/PillsComponent";
import { listPillsStyle } from "./listPills.style";

export default function ListPills({ onList }: { onList: boolean }) {
  const { colors } = useTheme();

  const [modalVisible, setModalVisible] = useState(false);

  const { pills, loadPills, delPill, updatePill } = usePillsStore();
  useFocusEffect(
    useCallback(() => {
      loadPills();
    }, [])
  );
  return (
    <View style={listPillsStyle(colors).pillsGroup}>
      {pills?.map((el) => (
        <PillsComponent
          id={el.id!}
          key={el.id}
          name={el.name}
          quantity={el.quantity}
          freq={el.freq}
          hour={el.hour}
          obs={el.obs}
          delPill={delPill}
          onList={onList}
          updatePill={updatePill}
        />
      ))}
    </View>
  );
}
