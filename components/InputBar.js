import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                onChangeText={(todoInput) => props.textChange(todoInput)}
                value={props.todoInput} 
            />
            <TouchableOpacity 
                style={styles.addButton}
                onPress={props.addNewTodo}
            >
                <Text style={styles.addButtonText}>+ ADD</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#333333',
        shadowOpacity: 0.1,
        paddingLeft: 20,
        paddingRight: 20
    },
    input: {
        padding: 10,
        backgroundColor: '#f3f3f3',
        flex: 1,
        fontSize: 18,
        height: 45,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        marginRight: 6
    },
    addButton: {
        width: 100,
        backgroundColor: '#00df8f',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '800'
    }
});

export default InputBar;