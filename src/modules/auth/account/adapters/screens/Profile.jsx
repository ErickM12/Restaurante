import { StyleSheet, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Button, Avatar } from "@rneui/base";
import { getAuth } from "firebase/auth";
import Loading from "../../../../../kernel/components/Loading";
export default function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const auth = getAuth();
  const user = auth.currentUser;
  useEffect(() => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        setUserProfile(profile);
      });
    }
  }, []);

  const updateProfile = () => {
    console.log("Actualizar perfil");
    updateProfile(auth.currentUser, {
      displayName: "Erick Mireles Merchant",
      photoURL: "https://firebasestorage.googleapis.com/v0/b/restauranteb-40cb1.appspot.com/o/avatar%2Fg4FF6xQ6mSSLzoPm2pR3uy6x2ry2.png?alt=media&token=1075f6dc-11be-4ddd-a5a8-1e59a2f79f1f",
    })
      .then(() => {
        console.log("listo");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Avatar
          size={64}
          rounded
          icon={{ name: "adb", type: "material" }}
          containerStyle={{ backgroundColor: "orange" }}
        >
          <Avatar.Accessory
            size={24}
            onPress={() => console.log("Aquí abrire mis archivos")}
          />
        </Avatar>
        <View style={styles.colum}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {userProfile?.displayName || "Anónimo"}
          </Text>
          <Text>{userProfile?.email || ""}</Text>
        </View>
      </View>

      <Button
        title="Cerrar sesión"
        onPress={() => auth.signOut()}
        buttonStyle={{ backgroundColor: "#ef524a" }}
        containerStyle={{ width: "80%" }}
      />
      <Button
        title="Actualizar perfil"
        onPress={updateProfile}
        buttonStyle={{ backgroundColor: "green" }}
        containerStyle={{ width: "80%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  row: {
    flexDirection: "row",
    marginBottom: 16,
    padding: 16,
  },
  colum: {
    flexDirection: "column",
    marginLeft: 16,
  },
});
