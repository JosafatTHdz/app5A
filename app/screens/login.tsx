import {Button, StyleSheet, Text, TextInput, View} from 'react-native'
import React from 'react'

const Login = () => {
    return(
        <View>
            <Text>Login</Text>
            <Text>Usuario</Text>
            <TextInput placeholder='usuario'></TextInput>
            <Text>Contraseña</Text>
            <TextInput placeholder='Contraseña' secureTextEntry={true}></TextInput>
            <Button title='Iniciar Sesión' onPress={()=>console.log('Iniciar Sesión')}  />
        </View>
    )
}

export default Login
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#EDE0D4',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}
})