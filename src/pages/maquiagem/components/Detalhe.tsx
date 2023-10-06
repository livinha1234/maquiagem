import React from "react";
import {Text, Image, View, StyleSheet} from "react-native";
import logo from "../../../../assets/logo.jpg";
import base from "../../../../assets/base.jpg";
import batom from "../../../../assets/batom.jpg";
import paleta from "../../../../assets/paleta.webp";
import iluminador from "../../../../assets/iluminador.webp";
import gel from "../../../../assets/gel.jpg";
import paleta2 from "../../../../assets/paleta2.webp";
import pincel from "../../../../assets/pincel.jpg";

type Props={
  nomestitulo: string,
  nomestituloproduto: string,
  precobase: string,
  precobatom: string,
  precopaleta: string,
  precoiluminador: string,
  precogel: string,
  precop2: string,
  precopincel: string,
  descricao: string,
  nomebase: string,
  nomebatom: string,
  nomepaleta: string,
  nomeiluminador: string,
  nomegel: string,
  nomep2: string,
  nomepincel: string,
  
}

export default function Detalhe({descricao, nomestitulo, precobase, nomestituloproduto, precobatom ,precopaleta ,precoiluminador ,precogel, precop2, precopincel, nomebatom,nomebase,nomegel,nomeiluminador,nomep2,nomepaleta,nomepincel}:Props){
    return<>
    <Text style={estilos.descricao}>
        {descricao}
      </Text>
      <Text style={estilos.nomestitulo}>{nomestitulo} </Text>
      <View style={estilos.logo}>
          <Image style={estilos.imagemlogo} source={logo} />
          <Text style={estilos.nomestituloproduto}>  {nomestituloproduto} </Text>
        </View>

        <View></View>
        
          <View style={estilos.divproduto}>
          <Image source={base} style={estilos.base} />
          <Text style={estilos.preco}>{nomebase}  -  {precobase}</Text>
        </View>

        <View style={estilos.divproduto}>
          <Image source={batom} style={estilos.batom} />
          <Text style={estilos.preco}>{nomebatom}  -  {precobatom}</Text>
        </View>

        <View style={estilos.divproduto}>
          <Image source={paleta} style={estilos.paleta} />
          <Text style={estilos.preco}>
           {nomepaleta}  -  {precopaleta}
          </Text>
        </View>

        <View style={estilos.divproduto}>
          <Image source={iluminador} style={estilos.iluminador} />
          <Text style={estilos.preco}>{nomeiluminador}  -  {precoiluminador}</Text>
        </View>
        
        <View style={estilos.divproduto}>
        <Image source={gel} style={estilos.gel} />
        <Text style={estilos.preco}>
          {nomegel}  -  {precogel}
        </Text>
    </View>
    
    <View style={estilos.divproduto}>
    <Image source={paleta2} style={estilos.paleta2} />
        <Text style={estilos.preco}>{nomep2}  -  {precop2}</Text>
      </View>
      
        <View style={estilos.divproduto}>
        <Image source={pincel} style={estilos.pincel} />
        <Text style={estilos.preco}>{nomepincel}  -  {precopincel}</Text>
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
