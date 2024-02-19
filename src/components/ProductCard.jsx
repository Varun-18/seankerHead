import React from "react";
// import { sta } from "@react-navigation/native";

import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function ProductCard({
  index,
  name,
  uri,
  price,
  sizes,
  navigate,
}) {
  return (
    <View style={styles.productCard}>
      <Pressable
        onPress={() => {
          navigate("ProductDetails", { index });
        }}
      >
        <Image source={{ uri }} style={styles.productCardImage} />
        <View style={styles.productDescription}>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productPrice}>MRP : ${price}</Text>
          <Text style={styles.sizeSection}>{sizes.length} sizes available</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    width: "48%",
    marginHorizontal: 5,
  },
  productDescription: {
    padding: 8,
    textAlign: "left",
  },
  productName: {
    fontWeight: "600",
    padding: 1,
  },
  productPrice: {
    fontWeight: "600",
    padding: 1,
  },
  sizeSection: {
    color: "#888",
    padding: 1,
  },
  productCardImage: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "white",
  },
});
