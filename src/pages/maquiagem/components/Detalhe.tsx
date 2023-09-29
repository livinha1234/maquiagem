import React from "react";
import {Text, Image, View, StyleSheet} from "react-native";
import logo from "../../../../assets/logo.jpg";

type Props={
  nomestitulo: string,
  preco: string,
  descricao: string,
  nomestituloproduto: string,

}

export default function Detalhe({descricao, nomestitulo, preco, nomestituloproduto}:Props){
    return<>
    <Text style={estilos.descricao}>
        {descricao}
      </Text>
      <Text style={estilos.nomestitulo}>{nomestitulo} </Text>
      <View style={estilos.logo}>
          <Image style={estilos.imagemlogo} source={logo} />
          <Text style={estilos.nomestitulo}> {nomestitulo}</Text>
        </View>
     <Text style={estilos.nomestituloproduto}>{nomestituloproduto}</Text>
          <View style={estilos.divproduto}>
          <Image source={Base} style={estilos.base} />
          <Text style={estilos.preco}>{preco}</Text>
        </View>

        <View style={estilos.divproduto}>
          <Image source={Batom} style={estilos.batom} />
          <Text style={estilos.preco}>Batom Ginger Glow: R$ 34,00</Text>
        </View>

        <View style={estilos.divproduto}>
          <Image source={Paleta} style={estilos.paleta} />
          <Text style={estilos.preco}>
            Paleta Ginger Glow: R$ 87,99
          </Text>
        </View>

        <View style={estilos.divproduto}>
          <Image source={Iluminador} style={estilos.iluminador} />
          <Text style={estilos.preco}>Iluminador - Stella: R$ 65,90</Text>
        </View>
        
        <View style={estilos.divproduto}>
        <Image source={Gel} style={estilos.gel} />
        <Text style={estilos.preco}>
          Gel para Sobrancelhas: R$ 39,90
        </Text>
    </View>
    
    

    <View style={estilos.divproduto}>
    <Image source={Paleta2} style={estilos.paleta2} />
        <Text style={estilos.preco}>Paleta Girl Power: R$ 79,90</Text>
      </View>
      
        <View style={estilos.divproduto}>
        <Image source={Pincel} style={estilos.pincel} />
        <Text style={estilos.preco}>Pincel Girl Power: R$ 79,90</Text>
      </View>
    </>
}

const estilos = StyleSheet.create({
nomestitulo: {
  fontSize: 16,
  lineHeight: 29,
  marginLeft: 14,
  textAlign: "center",
  fontWeight: "bold",
  color: "#C71585",
},

nomestitulo3: {
  fontSize: 16,
  lineHeight: 29,
  marginLeft: 14,
  textAlign: "center",
  fontWeight: "bold",
  color: "#000000",
},

imagemlogo: {
  width: 50,
  height: 50,
},

logo: {
  flexDirection: "row",
  paddingVertical: 12,
},

descricao: {
  color: "#A3A3A3",
  fontStyle: "italic",
  textAlign: "center",
},

preco: {
  fontSize: 17,
  lineHeight: 32,
  color: "#FF1493",
  marginTop: 8,
  left:10
},

base: {
  width: 100,
  height: 92,
  borderRadius:5

},

batom: {
  width: 100,
  height: 92,
  borderRadius:5
},

paleta: {
  width: 100,
  height: 92,
  borderRadius:5

},

iluminador: {
  width: 100,
  height: 92,
  borderRadius:5

},

gel: {
  width: 100,
  height: 92,
  borderRadius:5

},

paleta2: {
  width: 100,
  height: 92,
  borderRadius:5

},
pincel: {
  width: 100,
  height: 92,
  borderRadius:5

},

nomestituloproduto: {
  fontSize: 19,
  lineHeight: 35,
  fontWeight: "bold",
  color: "#C71585",
},

divproduto:{
  flexDirection:"row",
  backgroundColor:"#F7F7F7",
  borderRadius:5

}
});
