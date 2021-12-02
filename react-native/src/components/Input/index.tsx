import React from 'react';
import { Text, View, SafeAreaView, TextInput } from 'react-native';

import { styles } from './styles';

export default function Input({ placeholder, label, setValue, ...rest }) {
    return (
        <View style={styles.inputContainer}>
            <Text>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={setValue}
            >
            </TextInput>
        </View>
    )
}
