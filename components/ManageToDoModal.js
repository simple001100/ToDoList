import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import colors from '../Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState, useEfect} from 'react';

const ManageToDoModal = props => {
  const taskCount = props.data.todos.length;
  const completedCount = props.data.todos.filter(todo => todo.completed).length;

  const uncompetedIcon= (
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

  const [task, setTask] = useState('Untitled');

  const addTask = () => {
    props.data.todos = [...props.data.todos, {
      title: task,
      completed: false,
    }];
  };

  const iconCompleted = item => {
    return item.completed ? competedIcon : uncompetedIcon;
  };

  const todoList = item => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity>{iconCompleted(item)}</TouchableOpacity>

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
          {borderBottomColor: props.data.color},
        ]}>
        <View>
          <Text style={styles.title}>{props.data.name}</Text>
          <Text style={styles.taskCount}>
            {completedCount} of {taskCount} tasks
          </Text>
        </View>
      </View>

      <View style={[styles.section, {flex: 3}]}>
        <FlatList
          data={props.data.todos}
          renderItem={({item}) => todoList(item)}
          keyExtractor={item => item.title}
          contentContainerStyle={{paddingHorizontal: 32, paddingVertical: 64}}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <KeyboardAvoidingView style={[styles.section, styles.footer]}>
        <TextInput
          style={[styles.input, {borderColor: props.data.color}]}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity
          style={[styles.addToDo, {backgroundColor: props.data.color}]}
          onPress={addTask}>
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
