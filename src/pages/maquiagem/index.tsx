import React from 'react';
import { StyleSheet,Image, Dimensions, Text, View} from 'react-native';


import Maquiagem from '../../../assets/maquiagem.png';
import logo from '../../../assets/logo.png'
import Base from '../../../assets/base.jpg'
import Batom from '../../../assets/batom.jpg'
import Paleta from '../../../assets/paleta.webp'
import Iluminador from '../../../assets/iluminador.webp'
import Gel from '../../../assets/gel.jpg'


const width = Dimensions.get('screen').width;

export default function maquiagem (){
    return <>
    <Image source={Maquiagem} style={estilos.maquiagem}/>
    <View style={estilos.carrinho}>
      <View style={estilos.logo}>
        <Image style={estilos.imagemlogo} source={logo}/>
      <Text style={estilos.nomestitulo}>Makeup MariMaria</Text>
      </View>
      <Text>Produtos</Text>
      <Text style={estilos.descricao}>Empodere-se com o simples ato de se maquiar! </Text>
      <Image source={Base} style={estilos.base}/>
      <Text style={estilos.preco}>
        Base Mari Maria: R$ 50,00
      </Text>
      <Image source={Batom} style={estilos.batom}/>
      <Text style={estilos.preco}>
      Batom Líquido Ginger Glow: R$ 34,00
      </Text>
      <Image source={Paleta} style={estilos.paleta}/>
      <Text style={estilos.preco}>
      Paleta de sombras Ginger Glow: R$ 87,99
      </Text>
      <Image source={Iluminador} style={estilos.iluminador}/>
      <Text style={estilos.preco}>
      Iluminador - Stella: R$ 65,90
      </Text>
      <Image source={Gel} style={estilos.gel}/>
      <Text style={estilos.preco}>
      Gel Deliniador para Sobrancelhas: R$ 39,90
      </Text>
    </View>
    </>
}


const estilos = StyleSheet.create({
  maquiagem:{
    width: "100%",
    height: 578 / 768 * width
  },
  titulo:{
    fontSize:24,
    fontWeight:"bold",
    lineHeight:26,
    width:"100%",
    textAlign:"center",
    color: "white",
    position: "absolute",
    padding: 16
  },

  carrinho:{
    paddingVertical:8,
    paddingHorizontal:16
    },
    
    nomestitulo:{
    fontSize:16,
    lineHeight:26,
    marginLeft:12,
    fontWeight:"bold",
    color:"#C71585"
    },
    
    imagemlogo:{
      width:50,
      height:50
    },
    
    logo:{
      flexDirection:"row",
      paddingVertical:12
    },
    
     descricao:{
       color:"#A3A3A3",
       fontStyle:"italic"
     },
    
     preco:{
       fontSize:17,
       lineHeight:32,
       color:"#FF1493",
       marginTop:8
     },

     base:{
        width:150,
        height:150
     },

     
     batom:{
      width:150,
      height:150
   },

   paleta:{
    width:100,
    height:150
   },

   iluminador:{
    width:150,
    height:150
   },
   
   gel:{
    width:150,
    height:150
   }

   
  
})