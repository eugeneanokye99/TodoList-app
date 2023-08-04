import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'


export default function AddTodoScreen() {
  const [content, setContent] = useState("");

 const navigation = useNavigation();

 const router = useRouter()

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

 router.push("/(tabs)/all")
 setContent("")
}



  return (
    <View style={styles.container}>
    <View style={styles.input}>
      <TextInput
      placeholder='What needs to be done?'
      multiline
      value={content}
      onChangeText={setContent}
      />
    </View>

     <Pressable style={styles.button} onPress={onSubmit} >
     <Text style={styles.buttonText}>Add</Text>
   </Pressable>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {

 
  },
  input: {
    margin: 20,
    outline: 'none'
  },
  button: {
    backgroundColor: 'royalblue',
    padding: 4,
    borderRadius: 999,
    alignItems: 'center',
    width: 100,
    marginLeft: 200
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  }
})