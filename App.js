import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import colors from './Colors';
import tempData from './tempData';
import ToDoList from './components/ToDoList';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          ToDo <Text style={styles.text}>List</Text>
        </Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.tasksField}>
        <TouchableOpacity>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasks}>
        <FlatList 
          data={tempData} 
          keyExtractor={item => item.name} 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <ToDoList list={item} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flexDirection: "row",
  },
  text: {
    fontWeight: "300",
    color: colors.blue,
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal: 44,
  },
  tasksField: {
    marginVertical: 48,
  },
  plus: {
    fontSize: 48,
    color: colors.blue,
  },
  tasks: {
    height: 275,
    paddingLeft:32
  },
})

export default App;
