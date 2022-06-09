import React from 'react';
import { StyleSheet, Text, View}
from 'react-native';

export default function Cep(props) {
  return (
      <>
          <Text style={StyleSheet.texto}>Compra: {props.bid}</Text>
          <Text style={StyleSheet.texto}>Venda: {props.ask}</Text>
          <Text style={StyleSheet.texto}>Variação: {props.varBid}</Text>
          <Text style={StyleSheet.texto}>Máximo: {props.hight}</Text>
          <Text style={StyleSheet.texto}>Mínimo: {props.low}</Text>
      </>
  );
}

const styles = StyleSheet.create({
  texto:{
    fontSize:15,
    marginTop:10,
  }
});