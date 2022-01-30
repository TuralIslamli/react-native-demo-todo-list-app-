import React from "react";
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native'
import { THEME } from "../../theme";

export const AppButton = ({onPress, color = THEME.MAIN_COLOR, title}) =>
{
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style ={ {...styles.button, backgroundColor: color}}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
})