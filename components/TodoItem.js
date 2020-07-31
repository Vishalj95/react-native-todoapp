import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

export default class TodoItem extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        const todoItem = this.props.todoItem;

        return (
            <TouchableOpacity 
                style={styles.todoItem}
                onPress={() => this.props.toggleDone() }
            >
                <Text style={(todoItem.done) ? { color: '#AAAAAA' } : { color: '#313131' }}>
                    { todoItem.title }
                </Text>

                <Button 
                    style={styles.removeButton}
                    title="Remove" 
                    color={(todoItem.done) ? 'rgba(200, 0, 0, 0.5)' : '#ff6961'}
                    onPress={ () => this.props.removeTodo() }
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    todoItem: {
        width: '100%',
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
        paddingLeft: 24,
        paddingRight: 20,
        paddingBottom: 8
    },
    removeButton: {
        borderRadius: 8
    }
});