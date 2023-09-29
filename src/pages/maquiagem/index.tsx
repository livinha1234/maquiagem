import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Detalhe from "./components/Detalhe";
import Maquiagem from './components/Maquiagem';
import maquiagem from '../../mocks/maquiagem';



export default function maquiagem() {
  return <>
    <Maquiagem/>
      <View style={estilos.carrinho}>
        <Detalhe 
        />
        </View>
        </>
          
  
}

const estilos = StyleSheet.create({
  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  }
});

  