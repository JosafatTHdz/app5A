import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props={
  grupo:string,
  fecha:string,
  color?:string
}

const footer = (props:Props) =>{
    return (
        <View style={[styles.container]}>
            <Text style={[styles.titulo]}>Grupo: {props.grupo}</Text>
            <Text style={[styles.titulo]}>Fecha: {props.fecha}</Text>
        </View>
    )
}

export default footer;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor: '#C0A16B',
        justifyContent:'space-between',
        alignItems:'stretch',
        borderColor:'black',
        borderWidth:1,
        borderRadius:5,
        padding:10,
        paddingHorizontal:15
    },
    imagen:{
      height:75,
      width:75,
      borderRadius:38
    },titulo:{
      fontSize:25,
      fontWeight:'bold'
    },nombre:{
      fontSize:18,
      fontWeight:'bold'
    }

})