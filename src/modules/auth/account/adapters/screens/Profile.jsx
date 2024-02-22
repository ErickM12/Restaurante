import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import { getAuth } from 'firebase/auth'

export default function Profile() {
  const auth = getAuth();
  return (
    <View style={styles.container}>
     <Button 
      title="Cerrar sesión"
      onPress={() => auth.signOut()}
      buttonStyle={{ backgroundColor: '#ef524a' }}
      containerStyle={{ width: '80%' }}
     />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})    