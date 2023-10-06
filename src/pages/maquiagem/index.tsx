import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Detalhe from "./components/Detalhe";
import Maquiagem from './components/Maquiagem';
import maquiagens from '../../mocks/maquiagem';



export default function maquiagem() {
  return <>
    <Maquiagem descricao={maquiagens.Maquiagem.descricao}/>
      <View style={estilos.maquiagem}>
        <Detalhe 
         descricao ={maquiagens.detalhes.descricao}
         nomestitulo ={maquiagens.detalhes.nomestitulo}
         nomestituloproduto={maquiagens.detalhes.nomestituloproduto}
         precobase= {maquiagens.detalhes.precobase}
         precobatom= {maquiagens.detalhes.precobatom}
         precopaleta= {maquiagens.detalhes.precopaleta}
         precoiluminador= {maquiagens.detalhes.precop2}
         precogel={maquiagens.detalhes.precogel}
         precop2= {maquiagens.detalhes.precop2}
         precopincel= {maquiagens.detalhes.precopincel}
         nomebase={maquiagens.detalhes.nomebase}
         nomebatom = {maquiagens.detalhes.nomebatom}
         nomepaleta={maquiagens.detalhes.nomepaleta}
         nomeiluminador={maquiagens.detalhes.nomeiluminador}
         nomegel={maquiagens.detalhes.nomegel}
         nomep2={maquiagens.detalhes.nomep2}
         nomepincel={maquiagens.detalhes.nomepincel}
         
        />
        </View>
        </>
          
  
}

const estilos = StyleSheet.create({
  maquiagem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  }
});

  