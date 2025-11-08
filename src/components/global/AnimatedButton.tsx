import React, { useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

export default function AnimatedButton() {
  // valor animado começa em 0
  const progress = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    // reseta
    progress.setValue(0);
    // anima de 0 → 1 em 3s
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000, // 3 segundos
      useNativeDriver: false, // width não pode usar NativeDriver
    }).start();
  };

  // mapeia o valor de 0→1 para 0%→100% da largura
  const widthInterpolated = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      {/* fundo animado */}
      <Animated.View style={[styles.progress, { width: widthInterpolated }]} />
      {/* texto sobre a animação */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Carregar</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#ddd",
    justifyContent: "center",
  },
  progress: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#4CAF50",
    width: "0%",
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
