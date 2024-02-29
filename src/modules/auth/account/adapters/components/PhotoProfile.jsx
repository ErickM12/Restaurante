import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Avatar } from "@rneui/base";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { getAuth, updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../../config/util/firebaseConnection";
import UsuarioPhoto from "../../../../../../assets/img/usuario.png";
import Loading from "../../../../../kernel/components/Loading";
export default function PhotoProfile(props) {
  const {
    infoUser: { uid, photoURL, displayName, email, setReload },
  } = props;
  const [loading, setLoading] = useState(false);
  const uploadPhotoUrl = async () => {
    getDownloadURL(ref(storage, `avatar/${uid}`)).then((url) => {
      const auth = getAuth();
      const response = updateProfile(auth.currentUser, { photoURL: url });
      alert("Foto de perfil actualizada");
      setReload(true);
    });
  };

  const uploadImage = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const storageRef = ref(storage, `avatar/${uid}`);
      return uploadBytes(storageRef, blob);
    } catch (error) {
      console.log("error", error);
    }
  };

  const changeAvatar = async () => {
    const resultPermission = await MediaLibrary.requestPermissionsAsync();
    if (resultPermission.status === "granted") {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        //base64: true,
      });
      if (!result.canceled) {
        setLoading(true);
        uploadImage(result.assets[0].uri)
          .then(() => {
            uploadPhotoUrl();
          })
          .catch((error) => {
            alert("Error al subir la imagen");
            console.log("Error al subir la imagen", error);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    } else {
      alert("Necesitas dar permisos a la cámara");
      return;
    }
  };
  return (
    <View style={styles.row}>
      <Avatar
        size={64}
        rounded
        source={photoURL ? { uri: photoURL } : UsuarioPhoto}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View style={styles.colum}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          {displayName || "Anónimo"}
        </Text>
        <Text>{email || ""}</Text>
      </View>
      <Loading isShow={loading} title="Cambiando foto de perfil" />
    </View>
  );
}

const styles = StyleSheet.create({
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
