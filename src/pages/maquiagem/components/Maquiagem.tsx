import React from "react";
import {Image, Text, StyleSheet, Dimensions} from "react-native";
import maquiagem from "../../../../assets/maquiagem.png";

const width = Dimensions.get("screen").width;

type Props={
  titulo: string;
}

  export default function Maquiagem(){
      return<>
      <Image source={maquiagem} style={estilos.maquiagem} />
      <Text style={estilos.descricao}></Text>
      
      </>
  }

  const estilos = StyleSheet.create({
    maquiagem: {
      width: "100%",
      height: (578 / 768) * width,
    },
    descricao: {
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: 26,
      width: "100%",
      textAlign: "center",
      color: "white",
      position: "absolute",
      padding: 16,
    }

  });