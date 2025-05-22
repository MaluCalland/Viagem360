import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, Pressable } from "react-native"; // Importe ActivityIndicator para o loading
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Button, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Cadastro() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#387CFF" />;
  }

  const contaCriada = () => {
    
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <LinearGradient
        colors={['#387CFF', '#38B7FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={estilos.gradientBox}
      >
        <Text style={estilos.subtitulo}>Faça seu cadastro</Text>
        <TextInput
          placeholder="   NOME"
          style={estilos.input}
          keyboardType="default"
        />
        <TextInput
          placeholder="   E-MAIL"
          style={estilos.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="   SENHA"
          style={estilos.input}
          secureTextEntry
          keyboardType="default"
        />
        <TouchableOpacity
        style={estilos.botao}
        onPress={contaCriada}
        >
          <Text style={estilos.textoBotao}>Criar conta</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const estilos = StyleSheet.create({
    subtitulo:{
        fontSize: 25,
        alignContent: 'center',
        letterSpacing: 4,
        color: '#041542',
        fontFamily: 'Poppins_700Bold',
        marginTop: 33
    },
    textoBotao:{
        fontSize: 20,
        color: 'white',
        alignItems: 'center',
        fontFamily: 'Poppins_700Bold',
        letterSpacing: 2,
    },
    texto:{
        fontSize: 18,
        alignContent: 'center',
        marginTop: 40,
        color: '#5A5A5A',
        fontFamily: 'Poppins_400Regular',
    },
    input:{
        width: 366, 
        height: 60, 
        backgroundColor: '#FFFFFF', 
        borderRadius: 20, 
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        color: '#5A5A5A',
        borderColor: '#D2D2D2',
        borderWidth: 2,
        marginTop: 33
    },
    botao:{
        marginTop: 40,
        backgroundColor: "#387CFF",
        width: 200,
        height: 56,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,  
    },
    gradientBox: {
        borderRadius: 20,
        width: '100%',
        height: 932,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }
})