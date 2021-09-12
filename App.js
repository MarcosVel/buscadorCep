import React, { useRef, useState } from 'react';
import { Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import api from './src/services/api';

export default function App() {
  const [ cep, setCep ] = useState('');
  const inputRef = useRef(null);
  const [ cepUser, setCepUser ] = useState(null);

  function limpar() {
    setCep('');
    inputRef.current.focus(); // para apontar cursor e abrir teclado
  }

  async function buscar() {
    if (cep == '') {
      alert('Digite um cep válido');
      return; // não continuar
    }

    try {
      const response = await api.get(`/${ cep }/json`);
      // console.log(response.data);
      setCepUser(response.data);
      Keyboard.dismiss();
    } catch (error) {
      console.log('ERROS: ' + error)
    }
  }

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
          ref={ inputRef }
        />
      </View>

      <View style={ styles.areaBtn }>
        <TouchableOpacity
          style={ [ styles.botao, { backgroundColor: '#1d75cd' } ] }
          onPress={ buscar }
        >
          <Text style={ styles.botaoText }>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ [ styles.botao, { backgroundColor: '#cd3e1a' } ] }
          onPress={ limpar }
        >
          <Text style={ styles.botaoText }>Limpar</Text>
        </TouchableOpacity>
      </View>

      { cepUser &&
        <View style={ styles.resultado }>
          <Text style={ styles.itemText }>CEP: { cepUser.cep }</Text>
          <Text style={ styles.itemText }>Logradouro: { cepUser.logradouro }</Text>
          <Text style={ styles.itemText }>Bairro: { cepUser.bairro }</Text>
          <Text style={ styles.itemText }>Cidade: { cepUser.localidade }</Text>
          <Text style={ styles.itemText }>Estado: { cepUser.uf }</Text>
        </View>
      }
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
    paddingHorizontal: 10
  },
  itemText: {
    fontSize: 20
  }
})