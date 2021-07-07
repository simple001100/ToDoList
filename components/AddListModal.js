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
import tempData from '../tempData';
import {useState} from 'react';

const AddListModal = props => {
  const [name, setName] = useState('Untitled');
  const [color, setColor] = useState(colors.backgroundColors[0]);

  const createToDo = () => {
    tempData.push({
      name: name,
      color: color,
      todos: [],
    })

    props.state(false);
  }

  const colorsList = () => {
    return colors.backgroundColors.map(item => {
      return (
        <TouchableOpacity
          key={item}
          style={[styles.colorSelect, {backgroundColor: item}]}
          onPress={() => setColor(item)}
        />
      );
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => props.state(false)}>
        <Text style={styles.close}>Close</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.title}>Create ToDo List</Text>

        <TextInput
          style={styles.input}
          placeholder="List name"
          onChangeText={text => setName(text)}
        />

        <View style={styles.colorsContainer}>{colorsList()}</View>

        <TouchableOpacity
          style={[styles.createContainer, {backgroundColor: color}]}
          onPress={createToDo}>
          <Text style={styles.creatText}>Creat</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
  inputContainer: {
    alignItems: 'stretch',
    marginHorizontal: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.black,
    alignSelf: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    height: 50,
    width: 300,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  createContainer: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  creatText: {
    color: colors.white,
    fontWeight: '600',
  },
  colorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});

export default AddListModal;
