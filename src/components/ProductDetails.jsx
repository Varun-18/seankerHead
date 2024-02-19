import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import products from "../data/products";

export default function ProductDetails({ route }) {
  const { width } = useWindowDimensions();
  const data = products[route.params.index];
  return (
    <SafeAreaView style={styles.productDetailConatiner}>
      <ScrollView>
        <FlatList
          data={data.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{
                width: (width * 98) / 100,
                aspectRatio: 1,
              }}
            />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.productInfoContainer}>
          <Text style={styles.productName}>{data.name}</Text>
          <Text style={styles.productPrice}>${data.price}</Text>
          <Text style={styles.productDescription}>{data.description}</Text>
        </View>
      </ScrollView>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>add to cart</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productDetailConatiner: {
    margin: 5,
  },
  imageCarousel: {
    width: 100,
    aspectRatio: 1,
  },
  productName: {
    fontSize: 34,
    fontWeight: "600",
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  productDescription: {
    fontSize: 18,
    fontWeight: "300",
    marginVertical: 10,
    lineHeight: 30,
  },
  productInfoContainer: {
    padding: 10,
  },
  button: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    borderRadius: 50,
    backgroundColor: "black",
    padding: 15,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
