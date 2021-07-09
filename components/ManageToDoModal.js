import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';
import colors from '../Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';

const ManageToDoModal = props => {
  props.setListTask(props.data);
  const listTask = props.listTask;
  const taskCount = listTask.todos.length;
  const completedCount = listTask.todos.filter(todo => todo.completed).length;

  const uncompetedIcon = (
    <Ionicons
      name="square-outline"
      size={24}
      color={colors.gray}
      style={{width: 32}}
    />
  );

  const competedIcon = (
    <Ionicons
      name="checkbox-outline"
      size={24}
      color={colors.green}
      style={{width: 32}}
    />
  );

  const toggleCompleted = index => {
    let data = listTask;
    data.todos[index].completed = !data.todos[index].completed;

    props.updateList(data);
  };

  const iconCompleted = item => {
    return item.completed ? competedIcon : uncompetedIcon;
  };

  const todoList = (item, index) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={() => toggleCompleted(index)}>
          {iconCompleted(item)}
        </TouchableOpacity>

        <Text
          style={[
            styles.todo,
            {
              textDecorationLine: item.completed ? 'line-through' : 'none',
              color: item.completed ? colors.gray : colors.black,
            },
          ]}>
          {item.title}
        </Text>
      </View>
    );
  };

  const [newTodo, setNewTodo] = useState("");

  const addTask = () => {
    if (newTodo == "") setNewTodo("Untitled");
    listTask.todos = [
      ...listTask.todos,
      {
        title: newTodo,
        completed: false,
      },
    ];

    props.updateList(listTask);
    setNewTodo("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => props.stateClose(false)}>
        <FontAwesome name="close" size={26} color={colors.black} />
      </TouchableOpacity>

      <View
        style={[
          styles.section,
          styles.header,
          {borderBottomColor: listTask.color},
        ]}>
        <View>
          <Text style={styles.title}>{listTask.name}</Text>
          <Text style={styles.taskCount}>
            {completedCount} of {taskCount} tasks
          </Text>
        </View>
      </View>

      <View style={[styles.section, {flex: 3}]}>
        <FlatList
          data={listTask.todos}
          renderItem={({item, index}) => todoList(item, index)}
          keyExtractor={item => item.title}
          contentContainerStyle={{paddingHorizontal: 32, paddingVertical: 64}}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <KeyboardAvoidingView style={[styles.section, styles.footer]}>
        <TextInput
          style={[styles.input, {borderColor: listTask.color}]}
          onChangeText={text => setNewTodo(text)}
          value={newTodo}
        />
        <TouchableOpacity
          style={[styles.addToDo, {backgroundColor: props.data.color}]}
          onPress={() => addTask()}>
          <FontAwesome name="plus" size={16} color={colors.white} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 1,
  },
  close: {
    fontSize: 18,
    color: colors.blue,
  },
  section: {
    flex: 1,
    alignSelf: 'stretch',
  },
  header: {
    justifyContent: 'flex-end',
    marginLeft: 64,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.black,
  },
  taskCount: {
    marginTop: 4,
    marginBottom: 16,
    color: colors.gray,
    fontWeight: '600',
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addToDo: {
    height: 50,
    width: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoContainer: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default ManageToDoModal;
