import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todos, setTodos] = useState([])
  const [todoId, setTodoId] = useState(null)

  const removeTodo = id => {
    Alert.alert(
      'Deleting an entry',
      'Are you sure you want to delete the entry?',
      [
        {
          text: 'Delete',
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter(item => item.id != id))
          }
        },
        {
          text: 'No',
          style: 'cancel'
        }
      ],
      { cancelable: false }
    )
  }

  const editTodo = (id, title) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  let content = (
    <MainScreen
      openTodo={setTodoId}
      todos={todos}
      setTodos={setTodos}
      removeTodo={removeTodo} />
  )

  if (todoId) {
    const selectTodo = todos.find(todo => todo.id === todoId)
    content = (
      <TodoScreen
        goBack={() => setTodoId(null)}
        selectTodo={selectTodo}
        removeTodo={removeTodo}
        onSave={editTodo} />
    )
  }

  return (
    <View>
      <Navbar title='Todo App' />
      <View
        style={styles.container}
      >
        {content}
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
