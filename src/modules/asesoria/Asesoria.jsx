import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Image, Icon } from "@rneui/base";
import ListaAsesoria from "./components/ListaAsesoria";
export default function Asesoria(props) {
  const { navigation } = props;
  const data = [
    {
      id: 1,
      firstIcon: "car",
      title: "Asesoria 1",
      description: "Descripcion 1",
      secondIcon: "dots-vertical",
      action: () =>
        navigation.navigate("AsesoriaDetail", { title: 'Asesoria 1"' }),
    },
    {
      id: 2,
      firstIcon: "car",
      title: "Asesoria 2",
      description: "Descripcion 2",
      secondIcon: "dots-vertical",
      action: () =>
        navigation.navigate("AsesoriaDetail", { title: 'Asesoria 2' }),
    },
    {
      id: 3,
      firstIcon: "car",
      title: "Asesoria 3",
      description: "Descripcion 3",
      secondIcon: "dots-vertical",
      action: () =>
        navigation.navigate("AsesoriaDetail", { title: 'Asesoria 3' }),
    },
    {
      id: 4,
      firstIcon: "car",
      title: "Asesoria 4",
      description: "Descripcion 3",
      secondIcon: "dots-vertical",
      action: () =>
        navigation.navigate("AsesoriaDetail", { title: 'Asesoria 4' }),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 16 }}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1399/1399166.png",
            }}
            style={{ width: 120, height: 100 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontWeight: "bold" }}>Camioneta</Text>
            <Text>[Marca]</Text>
            <Text>[Modelo]</Text>
            <Text>[AAA-000]</Text>
          </View>
          <Icon type="material-community" name="dots-vertical" />
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
          <ListaAsesoria 
            firstIcon={item.firstIcon} 
            title={item.title}
            description={item.description}
            secondIcon={item.secondIcon}
            action={item.action}
          />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    opacity: 0.8,
  },
});
