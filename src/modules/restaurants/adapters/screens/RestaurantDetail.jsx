import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Image, AirbnbRating } from "@rneui/base";
import MapView, { Marker } from "react-native-maps";
export default function RestaurantDetail(props) {
  const { navigation } = props;
  const { params } = props.route;
  useEffect(() => {
    navigation.setOptions({ title: params.title });
  }, []);
  return (
    <View style={styles.container}>
      <Image source={{ uri: params.image }} style={styles.image} />
      <View style={styles.row}>
        <Text style={styles.title}>{params.title}</Text>
        <AirbnbRating
          count={5}
          defaultRating={params.rating}
          size={20}
          showRating={false}
        />
      </View>
      <Text style={styles.description}>{params.description}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: params.latitude,
          longitude: params.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: params.latitude,
            longitude: params.longitude,
          }}
          title={params.title}
          description={params.description}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
  },
  map: {
    height: 200,
    width: "100%",
    marginVertical: 16,
  },
});
