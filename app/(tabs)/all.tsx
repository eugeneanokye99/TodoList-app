import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import AddButton from '@/components/AddButton';

export default function AllScreen() {
  return (
    <ScrollView style={styles.container}>
     <Text>All</Text>
     <View style={styles.button}>
      <AddButton />
     </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  button: {
  marginLeft: 'auto',
  marginTop: '85%',
  marginRight: 15,
  },
});
