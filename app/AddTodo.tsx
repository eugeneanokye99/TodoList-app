import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'


export default function AddTodoScreen() {
 const navigation = useNavigation();

 useLayoutEffect(() => {
  navigation.setOptions({
   headerStyle: {
     backgroundColor: 'blue'
   },
  headerTintColor: "#fff"
 });
}, []);

const onSubmit = () => {
 console.warn("Button Pressed")
}



  return (
    <View>
    <View style={styles.input}>
      <TextInput
      placeholder='What needs to be done?'
      multiline
      />
    </View>

     <Pressable style={styles.button} onPress={onSubmit} >
     <Text style={styles.buttonText}>Submit</Text>
   </Pressable>
   </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 20,
    backgroundColor: 'gainsboro',
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'royalblue',
    padding: 4,
    borderRadius: 999,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  }
})