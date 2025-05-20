import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native"; // Importe ActivityIndicator para o loading
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Button, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

export default function CriandoLogin() {

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    const handlePress = () => {
        alert('Botão Entrar pressionado!');
      };

    return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text style={estilos.titulo}>Viagem</Text>
                <Text style={{fontSize: 40, alignContent: 'center', letterSpacing: 8, color: '#ADDAFF', fontFamily: 'Poppins_700Bold'}}>360</Text>
            </View>
            <Text style={estilos.subtitulo}>Seja bem vindo</Text>
            <TextInput
            placeholder="   E-MAIL"
            style={estilos.input}
            keyboardType="email-address"
            autoCapitalize="none"
            />
            <TextInput
            placeholder="   SENHA"
            style={estilos.input}
            keyboardType="email-address"
            autoCapitalize="none"
            />
        <TouchableOpacity
        style={estilos.botao}
        onPress={handlePress}
        >
          <Text style={estilos.textoBotao}>Entrar</Text>
        </TouchableOpacity>
        <Text style={estilos.texto}>Não tem conta?</Text>
        <Text style={[estilos.texto, {color: '#83A5FF', marginTop: 20}]}>Fazer cadastro</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    titulo:{
        fontSize: 40,
        alignContent: 'center',
        letterSpacing: 8,
        color: '#041542',
        fontFamily: 'Poppins_700Bold'
    },
    subtitulo:{
        fontSize: 30,
        alignContent: 'center',
        letterSpacing: 6,
        color: '#041542',
        fontFamily: 'Poppins_700Bold',
        marginTop: 33
    },
    textoBotao:{
        fontSize: 22,
        color: 'white',
        alignItems: 'center',
        fontFamily: 'Poppins_700Bold',
        letterSpacing: 4,
    },
    texto:{
        fontSize: 18,
        alignContent: 'center',
        marginTop: 33,
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
        marginTop: 33,
        backgroundColor: "#387CFF",
        width: 195,
        height: 56,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,  
    }
})