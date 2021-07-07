import React from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import colors from '../Colors';

const ManageToDoModal = (props) => {
  const taskCount = props.data.todos.length;
  const completedCount = props.data.todos.filter(todo => todo.completed);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => props.state(false)}>
        <Text style={styles.close}>Close</Text>
      </TouchableOpacity>

      <View style={[styles.section, styles.header]}>
        <View>
          <Text style={styles.title}>{props.data.name}</Text>
          <Text style={styles.taskCount}>
              
          </Text>
        </View>
      </View>
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
  },
  close: {
    fontSize: 18,
    color: colors.blue,
  },
});

export default ManageToDoModal;
