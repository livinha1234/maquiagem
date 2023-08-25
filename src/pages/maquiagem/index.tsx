import { StyleSheet,Image, Dimensions, Text, View } from 'react-native';
import React from 'react';
import topo from '../../../assets/maquiagem.png';


const width = Dimensions.get('screen').width;

export default function Carrinho (){
    return <>
    <Image source={topo} style={estilos.topo}/>
    </>
}


const estilos = StyleSheet.create({
    topo:{
      width: "100%",
      height: 578 / 768 * width
    }
}
);