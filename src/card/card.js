import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const cardWidth = Dimensions.get("window").width - 40;

export default function Card({ product }) {
  return (
    <View style={[styles.card, { backgroundColor: product.color1 }]}>
      <View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.desc}>{product.description}</Text>
      </View>
      <TouchableOpacity style={[styles.button]}>
        <Text style={styles.buttoLabel}>Experimentar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 500,
    width: cardWidth,
    borderRadius: 5,
    padding: 20,
    justifyContent: "space-between",
    paddingTop: 40,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 30,
    marginBottom: 15,
  },
  desc: {
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    padding: 15,
    width: 200,
    padding: 15,
    alignSelf: "center",
    backgroundColor: "black",
  },
  buttoLabel: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
  },
});
