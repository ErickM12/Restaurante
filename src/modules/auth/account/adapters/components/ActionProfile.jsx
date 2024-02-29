import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Divider } from "@rneui/base";
import ListAction from "../../../../../kernel/components/ListAction";
export default function ActionProfile(props) {
  const { infoUser } = props;
  const actions = [
    {
      id: 1,
      title: "Cambiar nombre",
      iconName: "account-circle",
      action: () => console.log("Cambiar nombre"),
    },
    {
      id: 2,
      title: "Cambiar email",
      iconName: "at",
      action: () => console.log("Cambiar email"),
    },
    {
      id: 3,
      title: "Cambiar contraseña",
      iconName: "key",
      action: () => console.log("Cambiar contraseña"),
    },
  ];
  return (
    <View style={{ marginVertical: 16 }}>
      <FlatList
        data={actions}
        renderItem={({ item }) => (
          <ListAction
            action={item.action}
            title={item.title}
            iconName={item.iconName}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
