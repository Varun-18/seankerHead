import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProductListing from "./src/components/ProductListing";
import Navbar from "./src/components/Navbar";
import ProductDetails from "./src/components/ProductDetails";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="ProductListing" component={ProductListing} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>

        {/* <Stack.Navigator>
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator> */}
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
});
