import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";

type TodoListItemsProps = {
  lists: {
    id: number;
    title: string;
    description: string;
  }
  
}

export default function TodoListItems({lists}: TodoListItemsProps) {
  const [checked, setChecked] = useState(false)

  const  handleCheckboxChange = () => {
   setChecked(!checked)
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <CheckBox 
      title={
        <TouchableOpacity style={styles.checkbox} >
        <Text style={[styles.title, checked && styles.checkedText]}>{lists.title}</Text>
          <Text style={[checked && styles.checkedText]}>{lists.description}</Text>
        </TouchableOpacity>
      }
      checked={checked}
      onPress={handleCheckboxChange}
      containerStyle={{backgroundColor: 'white', flex:1 }}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  content: {
    backgroundColor: "gainsboro",
    padding: 5,
    flexDirection: 'row'
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 2
  },
  checkedText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'gray'
  },
  checkbox: {
   paddingLeft: 10,
  },
});
