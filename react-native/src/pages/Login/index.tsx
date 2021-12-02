import React, { Component, useEffect, useState } from 'react'
import { styles } from './styles'
import { Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import v from './../../assets/fundo.png'
import { useForm } from 'react-hook-form'

export default function Login() {

    const { register, handleSubmit, setValue } = useForm()

    const [form, setForm] = useState("")

    function sub(data) {
        setForm(data.senha + " " + data.email)
    }

    useEffect(() => {
        register('email')
        register('senha')
    }, [register])

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={v} />
            <View style={styles.formContainer}>
                <Text style={styles.title}>
                    Login
                </Text>
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={entrada => setValue('email', entrada)}
                >
                </TextInput>

                <Text>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    onChangeText={entrada => setValue('senha', entrada)}
                >
                </TextInput>

                <TouchableOpacity style={styles.but} onPress={handleSubmit(sub)} >
                    <Text>Entrar</Text>
                </TouchableOpacity>

                <Text>
                    {form}
                </Text>
                <View style={styles.linksContainer}>
                    <Text style={styles.link}>Esqueci a senha</Text>
                    <Text style={styles.link}>Não tenho cadastro</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
