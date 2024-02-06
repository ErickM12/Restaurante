import {} from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Login(props) {
  console.log("Propiedades: ", props);
  const { name, lastname, age } = props;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{lastname}</Text>
      <Text>{age}</Text>
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
