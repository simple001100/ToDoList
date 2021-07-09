import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import colors from '../Colors';
import ManageToDoModal from './ManageToDoModal';
import {useState} from 'react';

const ToDoList = (props) => {
  let data = props.list;

  const [listTask, setListTask] = useState(data);

  const completedCount = data.todos.filter(todo => todo.completed).length;
  const remainingCount = data.todos.length - completedCount;

  const [ManageToDoVisible, setManageToDoVisible] = useState(false);

  const updateData = props.updateData;

  return (
    <View>
      <Modal
        animationYype="slide"
        visible={ManageToDoVisible}
        onRequestClose={() => setManageToDoVisible(!ManageToDoVisible)}>
        <ManageToDoModal stateClose={setManageToDoVisible} data={data} updateList={props.updateList} setListTask={setListTask} listTask={listTask}/>
      </Modal>

      <TouchableOpacity
        style={[styles.container, {backgroundColor: data.color}]}
        onPress={() => setManageToDoVisible(!ManageToDoVisible)}>
        <Text style={styles.listTitle} numberOfLines={1}>
          {data.name}
        </Text>

        <View>
          <View style={styles.wrapperCompleted}>
            <Text style={styles.count}>{completedCount}</Text>
            <Text style={styles.subtitle}>Completed</Text>
          </View>
          <View style={styles.wrapperRemaining}>
            <Text style={styles.count}>{remainingCount}</Text>
            <Text style={styles.subtitle}>Remaining</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    width: 200,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 18,
  },
  wrapperCompleted: {
    alignItems: 'center',
  },
  wrapperRemaining: {
    alignItems: 'center',
  },
  count: {
    fontSize: 48,
    fontWeight: '100',
    color: colors.white,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.white,
  },
  todoContainer: {
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    width: 200,
  },
});

export default ToDoList;
