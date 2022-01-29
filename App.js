import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './src/components/AddTodo';
import { Navbar } from './src/components/Navbar';
import { TodoList } from './src/components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    }
    setTodos(prev => [...prev, newTodo])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(item => item.id != id))
  }

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <TodoList todoList={todos} onRemove={removeTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
