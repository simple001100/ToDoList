import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Modal,
} from 'react-native';
import colors from './Colors';
import tempData from './tempData';
import ToDoList from './components/ToDoList';
import {useState} from 'react';
import AddListModal from './components/AddListModal';
import ManageToDoModal from './components/ToDoList';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  let data = tempData;

  const [addToDoVisible, setAddToDoVisible] = useState(false);

  const [listTodo, setListTodo] = useState(data);

  const addList = item => {
    setListTodo([...data, {...item, id: data.length + 1, todos: []}]);
  };

  const [listTask, setListTask] = useState();

  const updateList = list => {
    setListTask(
      data.map(item => {
        return item.id === list.id ? list : item;
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        animationYype="slide"
        visible={addToDoVisible}
        onRequestClose={() => setAddToDoVisible(!addToDoVisible)}>
        <AddListModal
          stateClose={setAddToDoVisible}
          data={data}
          addList={addList}
        />
      </Modal>
      <View style={styles.wrapper}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          ToDo <Text style={styles.text}>List</Text>
        </Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.tasksField}>
        <TouchableOpacity
          style={styles.addList}
          onPress={() => setAddToDoVisible(!addToDoVisible)}>
          <Icon name="plus" size={32} color={colors.blue} />
        </TouchableOpacity>
      </View>

      <View style={styles.tasks}>
        <FlatList
          data={listTodo}
          keyExtractor={item => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <ToDoList
              list={item}
              updateList={updateList}
              listTask={listTask}
              setListTask={setListTask}
            />
          )}
          keyboardShouldPersistTaps="always"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: '300',
    color: colors.blue,
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
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
  },
});

export default App;
