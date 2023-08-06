import { StyleSheet, ScrollView, Text, View, FlatList } from "react-native";
import AddButton from "../../components/AddButton";
import TodoListItems from "../../components/TodoListItems";
import list from "../../assets/data/list";

export default function AllScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Displays Todo Lists */}
      <View>
        <FlatList
        data={list}
        renderItem={({item}) => <TodoListItems lists={item} />}
        />
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
    backgroundColor: "gainsboro",
  },
  button: {
    flex: 1,
    marginLeft: "auto",
    marginTop: 30,
    marginRight: 15,
  },
});
