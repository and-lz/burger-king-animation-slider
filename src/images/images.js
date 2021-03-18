import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import productsModel from "../mock";

const cardWidth = Dimensions.get("window").width - 40;
const imageSize = 300;

export default function Images({ x }) {
  return (
    <View style={styles.container} pointerEvents="none">
      {productsModel.map((product, index) => {
        const style = useAnimatedStyle(() => {
          const translateX = interpolate(
            x.value,
            [
              (index - 1) * cardWidth,
              index * cardWidth,
              (index + 1) * cardWidth,
            ],
            [-cardWidth / 2, 0, cardWidth / 2]
          );
          const translateY = interpolate(
            x.value,
            [
              (index - 1) * cardWidth,
              index * cardWidth,
              (index + 1) * cardWidth,
            ],
            [0, 50, 0]
          );
          const scale = interpolate(
            x.value,
            [
              (index - 1) * cardWidth,
              index * cardWidth,
              (index + 1) * cardWidth,
            ],
            [0.3, 1, 0.3]
          );
          return {
            transform: [{ translateX }, { translateY }, { scale }],
          };
        });
        return (
          <Animated.View key={index} style={[styles.container, style]}>
            <Image
              source={product.picture}
              style={{
                width: imageSize,
                height: imageSize * product.aspectRatio,
              }}
            />
          </Animated.View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
