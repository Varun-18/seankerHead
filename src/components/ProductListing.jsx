import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductListing({ navigation }) {
  return (
    <FlatList
      data={products}
      renderItem={({ item, index }) => (
        <ProductCard
          index={index}
          key={item?.id}
          name={item?.name}
          uri={item?.image}
          price={item?.price}
          sizes={item?.sizes}
          navigate={navigation.navigate}
        />
      )}
      keyExtractor={(item) => item.id}
      style={styles.productList}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  productList: {
    flex: 1,
    width: "100%",
  },
});
