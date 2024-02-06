import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
export default function Restaurants() {
  return (
    <View style={styles.container}>
      <View style={{flex:1, backgroundColor: 'blue'}}>
        <Text>Restaurants</Text>
        <Text>
          <Icon name="home" type="font-awesome" color="red" size={22} />
        </Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text>Hola</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>Hola</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'row'
  },
});
