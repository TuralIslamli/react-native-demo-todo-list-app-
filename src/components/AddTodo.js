import { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            // setValue('')
        }else {
            Alert.alert('Cant be emty!')
        }

    }

    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Write'
                autoCorrect={false}
                autoCapitalize='none'
            />
            <Button title="Add" style={styles.button} onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949AB',
    }
})