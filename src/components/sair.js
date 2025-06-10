import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Sair({ navigation }) {
  function handleLogout() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  return (
    <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <TouchableOpacity style={estilos.botao} onPress={handleLogout}>
        <Text style={estilos.textoBotao}>Confirmar Logout</Text>
      </TouchableOpacity>    
    </View>
  );
}

const estilos = StyleSheet.create({
  textoBotao: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    fontFamily: 'Poppins_700Bold',
    letterSpacing: 2,
  },
  botao: {
    marginTop: 40,
    backgroundColor: "#387CFF",
    width: 350,
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});
