import { Image, View } from "react-native";
import nullPill from "../../../assets/images/capsule_pill.png";

export default function Example() {
  return (
    <View>
      <Image
        source={nullPill}
        style={{ width: 120, height: 120, resizeMode: "contain" }}
      />
    </View>
  );
}
