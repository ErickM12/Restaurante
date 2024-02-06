import {} from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Erick</Text>
      <Text>Mireles</Text>
      <Text>Merchant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
