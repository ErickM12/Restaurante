import { StyleSheet, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Button, Avatar } from "@rneui/base";
import { getAuth, updateProfile } from "firebase/auth";
import Loading from "../../../../../kernel/components/Loading";
import PhotoProfile from "../components/PhotoProfile";
import ActionProfile from "../components/ActionProfile";
export default function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [reload, setReload] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    (async () => {
      const user = await auth.currentUser;
      console.log("user", user);
      setUserProfile(user);
    })();
    setReload(false);
  }, [reload]);
  return (
    <View style={styles.container}>
      {userProfile && (
        <PhotoProfile infoUser={userProfile} setReload={setReload} />
      )}
      {userProfile && <ActionProfile infoUser={userProfile} />}
      <Button
        title="Cerrar sesión"
        onPress={() => auth.signOut()}
        buttonStyle={{ backgroundColor: "#ef524a" }}
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
});
