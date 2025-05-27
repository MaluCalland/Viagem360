// src/screens/sair.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function Sair({ navigation }) {
  useEffect(() => {
    // aqui você pode limpar tokens, estado de autenticação, etc.

    // depois navega para a tela de login
    navigation.replace('Login');
  }, []);

  return (
    <View>
      <Text>Saindo...</Text>
    </View>
  );
}
