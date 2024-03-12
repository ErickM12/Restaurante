import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
export default function ListaAsesoria(props) {
  const { firstIcon, title, description, secondIcon, action } = props;
  return (
    <TouchableOpacity onPress={action}>
      <View style={{ flexDirection: "row", padding: 12, marginBottom: 12, justifyContent: 'space-between', borderBottomWidth: 0.5, borderTopWidth: 0.5}}>
        <Icon type="material-community" name={firstIcon} color="orange" />
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Icon type="material-community" name={secondIcon} color="orange" />
      </View>
    </TouchableOpacity>
  );
}
