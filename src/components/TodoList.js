import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";

export const TodoList = ({ todoList, onRemove }) => {
    return (
        <ScrollView>
            {todoList.map((item) => {
                return <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.5}
                    onPress={() => console.log('Pressed', item.id)}
                    onLongPress={()=>onRemove(item.id)}
                >
                    <Text style={styles.todoList}>{item.title}</Text>
                </TouchableOpacity>
            })}
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    todoList: {
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginTop: 15
    }
})