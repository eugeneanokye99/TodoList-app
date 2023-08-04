import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CompletedScreen() {
  return (
    <View style={styles.container}>
      <Text>Completed</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});