import { StyleSheet, ScrollView, Text, View } from 'react-native';
import AddButton from '../../components/AddButton';
import TodoListItems from '../../components/TodoListItems';

export default function AllScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Displays Todo Lists */}
     <View>
      <TodoListItems />
     </View>


     {/* Add Button */}
     <View style={styles.button}>
      <AddButton />
     </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gainsboro',
  },
  button: {
  marginLeft: 'auto',
  marginTop: 500,
  marginRight: 15,
  position: 'fixed',
  },
});
