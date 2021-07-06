import React from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import colors from '../Colors';

const AddListModal = props => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => props.state(false)}>
        <Text style={styles.close}>Close</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  wrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  close: {
    fontSize: 18,
    color: colors.blue,
  },
});

export default AddListModal;
