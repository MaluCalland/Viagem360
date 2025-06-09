import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image, TextInput, Button} from "react-native"; // Importe ActivityIndicator para o loading
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import LugaresViagem from "../screens/lugares.js";

export default function PaginaPrincipal({route, navigation}) {

    const { nomeUsuario } = route.params || {}

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1,}}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return(
        <View style={{backgroundColor: 'white', flex: 1, padding: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text style={estilos.titulo}>Olá, </Text>
                <Text style={estilos.nome}>{nomeUsuario || 'Usuário'}</Text>
            </View>
            <Text style={estilos.info}>Explore o Brasil</Text>
            <Text style={estilos.subtitulo}>Locais Populares</Text>
            <LugaresViagem/>
        </View>
    )
}

const estilos = StyleSheet.create({
    titulo:{
        fontSize: 30,
        color: '#041542',
        fontFamily: 'Poppins_700Bold', 
        letterSpacing: 1.95
    },
    info:{
        fontSize: 20,
        alignContent: 'center',
        color: '#5A5A5A',
        fontFamily: 'Poppins_400Regular',
        marginTop: 15,
        letterSpacing: 1.3,
    },
    subtitulo:{
        fontSize: 30,
        color: '#041542',
        fontFamily: 'Poppins_700Bold',
        marginTop: 20,
        letterSpacing: 1.95
    },
    nome:{
        fontSize: 30,
        color: '#041542',
        fontFamily: 'Poppins_400Regular',
    }
})