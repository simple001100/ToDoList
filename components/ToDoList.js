import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import colors from '../Colors';
import ManageToDoModal from './ManageToDoModal';
import {useState} from 'react';

const ToDoList = ({list}) => {
  const completedCount = list.todos.filter(todo => todo.completed).length;
  const remainingCount = list.todos.length - completedCount;

  const [ManageToDoVisible, setManageToDoVisible] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: list.color}]}
      onPress={() => setManageToDoVisible(!ManageToDoVisible)}>
      <Modal
        animationYype="slide"
        visible={ManageToDoVisible}
        onRequestClose={() => setManageToDoVisible(!ManageToDoVisible)}>
        <ManageToDoModal state={setManageToDoVisible} data={list} />
      </Modal>

      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
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
