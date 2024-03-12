import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Image, Icon } from "@rneui/base";
export default function AsesoriaDetail(props) {
  const { params } = props.route;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", marginBottom: 16, fontSize: 18 }}>
          Prime Protection Individual
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 16 }}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1399/1399166.png",
            }}
            style={{ width: 120, height: 100 }}
          />
          <View style={{ flexDirection: "column", marginLeft: 32 }}>
            <Text style={{ fontWeight: "bold" }}>{params.title}</Text>
            <Text>[Marca]</Text>
            <Text>[Modelo]</Text>
            <Text>[AAA-000]</Text>
          </View>
        </View>
        <Text style={{ marginBottom: 16, fontSize: 14 }}>
          Mantén tu auto en las mejores condiciones y ahorra a lo grande.
        </Text>
        <View style={styles.card}>
          <View style={styles.title}>
            <Text style={{ color: "#FFF" }}>Plan mensual</Text>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              fontWeight: "bold",
              marginTop: 16,
            }}
          >
            $000
          </Text>
          <Text style={{ marginTop: 8, textAlign: "center" }}>Por mes</Text>
          <View style={{ flexDirection: "row", padding: 12 }}>
            <View style={{ flexDirection: "column", marginRight: 8 }}>
              <Icon type="material-community" name="circle" color="orange" />
              <Icon type="material-community" name="circle" color="orange" />
              <Icon type="material-community" name="circle" color="orange" />
              <Icon type="material-community" name="circle" color="orange" />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Acceso a una grua al mes, en donde quiera que estes</Text>
              <Text>Acceso a una grua al mes, en donde quiera que estes</Text>
              <Text>Acceso a una grua al mes, en donde quiera que estes</Text>
              <Text>Acceso a una grua al mes, en donde quiera que estes</Text>
            </View>
          </View>
          
      
        </View>

        <View style={styles.card}>
          <View style={styles.title}>
            <Text style={{ color: "#FFF" }}>Plan mensual</Text>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              fontWeight: "bold",
              marginTop: 16,
            }}
          >
            $000
          </Text>
          <Text style={{ marginTop: 8, textAlign: "center" }}>Por mes</Text>
          <View style={{ flexDirection: "row", padding: 12 }}>
            <View style={{ flexDirection: "column", marginRight: 8 }}>
              <Icon type="material-community" name="circle" color="orange" />
              <Icon type="material-community" name="circle" color="orange" />
              <Icon type="material-community" name="circle" color="orange" />
              <Icon type="material-community" name="circle" color="orange" />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Acceso a una grua al mes, en donde quiera que estes</Text>
              <Text>Acceso a una grua al mes, en donde quiera que estes</Text>
              <Text>Acceso a una grua al mes, en donde quiera que estes</Text>
              <Text>Acceso a una grua al mes, en donde quiera que estes</Text>
            </View>
          </View>
          
      
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 32,
  },
  card: {
    backgroundColor: "#f9f5f5",
    flexDirection: "column",
    marginVertical: 12
  },
  title: {
    backgroundColor: "#000",
    borderRadius: 12,
    padding: 14,
  },
});
