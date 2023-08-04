import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'


export default function AddTodoScreen() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

 const navigation = useNavigation();

 const router = useRouter()

 useLayoutEffect(() => {
  navigation.setOptions({
   headerStyle: {
     backgroundColor: 'blue'
   },
  headerTintColor: "#fff",
  title: "Add Task"
 });
}, []);

const onSubmit = () => {
 console.warn("Title: ", title)
 console.warn("Description: ", content)

 router.push("/(tabs)/all")
 setContent("")
 setTitle("")
}



  return (
    <View style={styles.container}>
      {/* Add Task */}
      <View  style={{margin: 20, flexDirection: 'row',}}>
      <Text style={styles.name}>Title: </Text>
      <TextInput
      placeholder='Title'
      multiline
      value={title}
      onChangeText={setTitle}
      style={{width: '100%'}}
      />
    </View>

    <View  style={{margin: 20, flexDirection: 'row',}}>
      <Text style={styles.name}>Description: </Text>
      <TextInput
      placeholder='What needs to be done?'
      multiline
      value={content}
      onChangeText={setContent}
      style={{width: '100%'}}
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
    height: "100%",
 backgroundColor: 'gainsboro'
 
  },
  name: {
    marginTop: 5, 
    marginRight: 4,
  },
  button: {
    backgroundColor: 'royalblue',
    padding: 4,
    borderRadius: 999,
    alignItems: 'center',
    width: 100,
    marginLeft: 150
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  }
})