import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './styles'
export default function Button({ children, onPress }) {
    return (
        <TouchableOpacity style={styles.but} onPress={onPress}>
            <Text>{children}</Text>
        </TouchableOpacity>
    )
}
