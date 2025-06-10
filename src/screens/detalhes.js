import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Detalhes({ route }) {
    const { lugar } = route.params;
  
    return (
      <ScrollView style={estilos.fundo}>
        <View>
          <Image source={{ uri: lugar.foto }} style={estilos.fotoPrincipal} />
          <Text style={estilos.nomeTitulo}>{lugar.nome}</Text>
          <Text style={estilos.sobre}>{lugar.sobre}</Text>
        </View>
        <Text style={estilos.subtitulo}>Passeios</Text>
        {lugar.passeios.map((item) => (
          <View key={item.id} style={estilos.nav}>
            <Image source={{ uri: item.foto }} style={estilos.fotoPasseio} />
            <View style={estilos.textoContainer}>
              <Text style={estilos.nome}>{item.nome}</Text>
              <Text style={estilos.sobre}>{item.descricao}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
  
  const estilos = StyleSheet.create({
    fundo: {
      flex: 1,
      padding: 20,
      backgroundColor: 'white',
    },
    titulo: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      padding: 20,
    },
    texto: {
      fontSize: 20,
      textAlign: 'center',
    },
    fotoPrincipal: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginBottom: 20,
    },    
    nav: {
      backgroundColor: 'white',
      padding: 15,
      marginBottom: 15,
      flexDirection: 'row',
      alignItems: 'center',
      boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)',
    },
    foto: {
      width: 120,
      height: 120,
      borderRadius: 8,
      marginRight: 15,
    },
    fotoPasseio: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginRight: 15,
    },
    textoContainer: {
      flex: 1,
    },
    nomeTitulo: {
      fontSize: 20,
      color: '#041542',
      fontFamily: 'Poppins_700Bold', 
      letterSpacing: 1.3,
      marginBottom: 20
    },
    nome: {
      fontSize: 20,
      color: '#041542',
      fontFamily: 'Poppins_700Bold', 
      letterSpacing: 1.3,
      marginBottom: 10
    },
    subtitulo: {
      fontSize: 20,
      color: '#041542',
      fontFamily: 'Poppins_700Bold', 
      letterSpacing: 1.3,
      marginVertical: 20
    },
    sobre: {
      fontSize: 15,
      color: '#041542',
      fontFamily: 'Poppins_400Regular', 
      textAlign: 'justify'
    },
    container: {
      margin: 20,
    },
    containerPrincipal: {
      flex: 1,
      padding: 20,
     },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: '#f0f0f0',
    },
    botao: {
      padding: 10,
      marginTop: 10,
      fontSize: 15,
      backgroundColor: "#87CEFA",
      fontWeight: 'bold',
      borderRadius: 10
    },
    resultadoContainerFundo: {
      marginTop: 20,
      padding: 15,
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
    },
    textoResultado: {
      fontSize: 16,
      marginBottom: 5,
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f0f0f0',
    }
  });
