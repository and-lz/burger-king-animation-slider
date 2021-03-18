import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Card from "./src/card/card";
import Images from "./src/images/images";
import productsModel from "./src/mock";
import News from "./src/news/news";

export default function App() {
  const cardWidth = Dimensions.get("window").width;
  const translateX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  const stylesAnimated = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      translateX.value,
      productsModel.map((_, i) => cardWidth * i),
      productsModel.map((product) => product.color2)
    );
    return { backgroundColor };
  });
  return (
    <Animated.View style={[styles.container, stylesAnimated]}>
      <ScrollView style={styles.page}>
        <View>
          <Animated.ScrollView
            snapToInterval={cardWidth - 40}
            onScroll={onScroll}
            scrollEventThrottle={16}
            decelerationRate="fast"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {productsModel.map((product) => (
              <Card product={product} />
            ))}
          </Animated.ScrollView>
          <Images x={translateX} />
        </View>
        <News
          title="UMA ÓTIMA REFEIÇÃO VEM PRIMEIRO"
          description="Fundado em 1954, o BURGER KING® é a segunda maior rede de hambúrgueres do mundo. "
        />
        <News
          title="BURGER KING® DO BRASIL"
          description="O Burger King do Brasil é um master franqueado do Burger King Corporation no país."
        />
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, width: "100%", padding: 20, marginTop: 60 },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    width: 350,
  },
});
