import { StyleSheet, View, Alert, Text } from 'react-native';
import React, { useState } from 'react';
import Caja from './caja';
import Boton from './boton';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';


const Calculadora1 = () => {

    //Logica de la app
    const Suma=()=>{
        const v1=parseFloat(valor1);
        const v2=parseFloat(valor2);
        setRes(v1+v2);
    }

    const Resta=()=>{
        const v1=parseFloat(valor1);
        const v2=parseFloat(valor2);
        setRes(v1-v2);
    }

    const Multiplicacion=()=>{
        const v1=parseFloat(valor1);
        const v2=parseFloat(valor2);
        setRes(v1*v2);
    }

    const Division=()=>{
        const v1=parseFloat(valor1);
        const v2=parseFloat(valor2);
        setRes(v1/v2);
    }

    //Estado de la app
    const [valor1, setValor1] = useState<string>('');
    const [valor2, setValor2] = useState<string>('');
    const [res, setRes] = useState<number | null>(0);

    //Renderizado de la app
    return (
        <View style={styles.container}>
            <Caja label='Valor 1' icono={<Octicons name="number" size={24} color="black" />} onChangeText={(contenido) => {setValor1(contenido)}} />
            
            <Caja label='Valor 2' icono={<Octicons name="number" size={24} color="black" />} onChangeText={(contenido) => {setValor2(contenido)}} />

            <View style={{flexDirection:'row'}}>
                <Boton titulo='Suma' icono={<Octicons name="plus" size={24} color="#fff" />} onPress={()=>(Suma())}/>
                <Boton titulo='Resta' icono={<AntDesign name="minuscircleo" size={24} color="#fff" />} onPress={()=>(Resta())}/>
                <Boton titulo='Multi' icono={<Octicons name="x" size={24} color="#fff" />} onPress={()=>(Multiplicacion())}/>
                <Boton titulo='Division' icono={<Feather name="divide-circle" size={24} color="#fff" />} onPress={()=>(Division())}/>
            </View>

            <Text>El resultado es: {res}</Text>
            <Text>Valor 1: {valor1}, Valor 2: {valor2}</Text>
        </View>
    )
}

export default Calculadora1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
