import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import api from './src/services/api';

export default function App() {
  const [ cep, setCep ] = useState('')

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ { alignItems: 'center' } }>
        <Text style={ styles.text }>Digite o CEP desejado</Text>
        <TextInput
          style={ styles.input }
          placeholder='Ex.: 70790905'
          value={ cep }
          onChangeText={ (texto) => setCep(texto) }
          keyboardType='numeric'
        />
      </View>

      <View style={ styles.areaBtn }>
        <TouchableOpacity style={ [ styles.botao, { backgroundColor: '#1d75cd' } ] }>
          <Text style={ styles.botaoText }>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ [ styles.botao, { backgroundColor: '#cd3e1a' } ] }>
          <Text style={ styles.botaoText }>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={ styles.resultado }>
        <Text style={ styles.itemText }>CEP: 7900000</Text>
        <Text style={ styles.itemText }>Logradouro: Rua</Text>
        <Text style={ styles.itemText }>Bairro: Campos Elísios</Text>
        <Text style={ styles.itemText }>Cidade: Varginha</Text>
        <Text style={ styles.itemText }>Estado: MG</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  areaBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  botao: {
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 20,
    color: '#fff'
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20
  }
})