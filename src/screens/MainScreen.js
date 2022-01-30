import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";

export const MainScreen = ({ openTodo, todos, setTodos, removeTodo }) => {
    let content = (<TodoList todoList={todos} onRemove={removeTodo} onOpen={openTodo} />)

    if (!todos?.length) {
        content = (<View style={styles.imgWrap}>
            <Image style={styles.img} source={require('../../assets/no-items.png.png')} />
        </View>)
    }
    const addTodo = (title) => {
        const newTodo = {
            id: Date.now().toString(),
            title: title
        }
        setTodos(prev => [...prev, newTodo])
    }

    return <View>
        <AddTodo onSubmit={addTodo} />
        {content}
    </View>
}


const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})