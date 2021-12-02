import React, { Component, useEffect, useState } from 'react'
import { styles } from './styles'
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import v from './../../assets/fundo.png'
import { useForm } from 'react-hook-form'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function Login() {

    const { register, handleSubmit, setValue } = useForm()

    const [form, setForm] = useState("")

    function sub(data) {
        setForm(`senha: ${data.senha} email: ${data.email}`)
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

                <Input placeholder="E-mail" label="E-mail" setValue={(entrada) => setValue('email', entrada)} />
                <Input placeholder="Senha" label="Senha" setValue={(entrada) => setValue('senha', entrada)} />

                <Button onPress={handleSubmit(sub)}>Entrar</Button>

                <Text style={{ backgroundColor: 'grey', padding: 20, color: '#fff' }}>
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
