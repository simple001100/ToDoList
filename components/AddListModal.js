import React from "react";
import {Image, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const AddListModal = () => {
    return(
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableOpacity style={styles.wrapper}>
                
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default AddListModal;