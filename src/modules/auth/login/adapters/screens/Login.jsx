import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button, Icon, Image } from "@rneui/base";
import Logo from "../../../../../../assets/img/logo.png";
import { isEmpty } from "lodash";
import Loading from "../../../../../kernel/components/Loading";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const login = () => {
    if (!isEmpty(email) && !isEmpty(password)) {
      setShowErrorMessage("");
      console.log("por entrar", email, password);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("usuario", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error", errorCode, errorMessage);
        });
    } else {
      setShowErrorMessage("Campos obligatorios");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Input
        placeholder="erickmireles@utez.edu.mx"
        onChange={({ nativeEvent: { text } }) => setEmail(text)}
        label="Correo electrónico *"
        labelStyle={styles.label}
        containerStyle={styles.input}
        keyboardType="email-address"
        rightIcon={
          <Icon type="material-community" name="email" color="#ef524a" />
        }
        errorMessage={showErrorMessage}
      />
      <Input
        placeholder="*********"
        onChange={({ nativeEvent: { text } }) => setPassword(text)}
        label="Contraseña *"
        labelStyle={styles.label}
        containerStyle={styles.input}
        secureTextEntry={showPassword}
        rightIcon={
          <Icon
            color="#ef524a"
            type="material-community"
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        errorMessage={showErrorMessage}
      />
      <Button
        title="Iniciar sesión"
        onPress={login}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
      />
      <Loading isShow={loading} title="Iniciando sesión" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  label: {
    color: "#88c040",
    fontSize: 16,
  },
  btnContainer: {
    width: "80%",
  },
  btnStyle: {
    backgroundColor: "#ef524a",
  },
});
