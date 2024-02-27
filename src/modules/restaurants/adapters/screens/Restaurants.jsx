import { StyleSheet, FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import FlatListRestaurant from "./components/FlatListRestaurant";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../../config/util/firebaseConnection";
import Loading from '../../../../kernel/components/Loading'
export default function Restaurants() {
  const [restaurants, setRestaurants] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async() =>{
      try {
        const querySnapshot = await getDocs(collection(db, "restaurants"));
        const arrayRestaurants = [];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.data()["title"]}`);
          arrayRestaurants.push({
            uid: doc.id,
            title: doc.data()["title"],
            description: doc.data()["description"],
            rating: doc.data()["rating"],
            image: doc.data()["image"],
          });
          setRestaurants(arrayRestaurants);
        });
      } catch (error) {
        console.log("error", error);
      } finally{
        setLoading(false);
      }
    })()
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <FlatListRestaurant
            image={item.image}
            title={item.title}
            description={item.description}
            rating={item.rating}
          />
        )}
        keyExtractor={(item) => item.uid.toString()}
      />
      <Loading isShow={loading} title='Cargando restaurantes' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
