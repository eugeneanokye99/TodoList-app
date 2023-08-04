import { StyleSheet, View, Text } from 'react-native';


export default function ActiveScreen() {
  return (
    <View style={styles.container}>
      <Text>Active</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
