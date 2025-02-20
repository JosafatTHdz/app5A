import { StyleSheet, View, Alert, Text } from 'react-native';
import React, { useState } from 'react';
import Caja from './caja';
import Boton from './boton';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CalProp = () => {
    // Estados de la app
    const [consumo, setConsumo] = useState<string>('');
    const [porcentaje, setPorcentaje] = useState<number | null>(null);
    const [propina, setPropina] = useState<number | null>(null);
    const [otroPorcentaje, setOtroPorcentaje] = useState<string>('');

    // Función para calcular propina con porcentaje predefinido
    const calcularPropina = (porcentaje: number) => {
        const consumoNumerico = parseFloat(consumo);
        if (!isNaN(consumoNumerico) && consumoNumerico > 0) {
            const resultado = consumoNumerico * (porcentaje / 100);
            setPropina(resultado);
            setPorcentaje(porcentaje);
        } else {
            Alert.alert("Error", "Ingresa un valor válido en 'Consumo'");
        }
    };

    // Función para calcular propina con porcentaje personalizado
    const calcularPropinaPersonalizada = () => {
        const porcentajeNumerico = parseFloat(otroPorcentaje);
        if (!isNaN(porcentajeNumerico) && porcentajeNumerico > 0) {
            calcularPropina(porcentajeNumerico);
        } else {
            Alert.alert("Error", "Ingresa un porcentaje válido");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora de Propinas</Text>

            <Caja 
                label="Consumo" 
                icono={<MaterialIcons name="food-bank" size={24} color="black" />} 
                onChangeText={(value) => setConsumo(value.replace(/[^0-9.]/g, ""))}
            />

            <View style={styles.percent}>
                <Boton titulo="10%" onPress={() => calcularPropina(10)} />
                <Boton titulo="15%" onPress={() => calcularPropina(15)} />
                <Boton titulo="20%" onPress={() => calcularPropina(20)} />
            </View>

            <Caja 
                label="Otro: " 
                onChangeText={(value) => setOtroPorcentaje(value.replace(/[^0-9.]/g, ""))} 
            />
            <Boton titulo="Aceptar" onPress={calcularPropinaPersonalizada} />

            {propina !== null && (
                <Text style={styles.resultado}>
                    Propina ({porcentaje}%): ${propina.toFixed(2)}
                </Text>
            )}
        </View>
    );
};

export default CalProp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    percent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    resultado: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'green',
    },
});
