import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

export default function AddButton() {
  return (
    <Link href={"/AddTodo"} asChild>
    <Pressable style={styles.icon}>
    <Ionicons name="add" size={24} color="white" />
    </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'royalblue',
    borderRadius: 999,
    padding: 12,
  }
})