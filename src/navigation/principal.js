import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image, TextInput, Button} from "react-native"; // Importe ActivityIndicator para o loading
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

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
                <Text style={estilos.subtitulo}>Olá, </Text>
                <Text style={estilos.nome}>{nomeUsuario || 'Usuário'}</Text>
            </View>
            <Text style={estilos.texto}>Explore o Brasil</Text>
            <View style={estilos.container}>
                <TextInput
                    style={estilos.input}
                    placeholder="Faça sua pesquisa"
                    placeholderTextColor="#5A5A5A"
                />
                <Image
                    source={{uri: 'https://raw.githubusercontent.com/DSCODEYT/App-UIUX-Design/8dfacd7efd37acbb7c9db3963ff407ad4cfe4565/Travel%20app%20source%20file/fi-br-search.svg'}}
                    style={estilos.icon}
                />
            </View>
            <Text style={estilos.subtitulo}>Locais Populares</Text>
            <Button title="Sair" onPress={() => navigation.navigate('Login')} />

        </View>
    )
}

const estilos = StyleSheet.create({
    texto:{
        fontSize: 18,
        alignContent: 'center',
        marginTop: 30,
        color: '#5A5A5A',
        fontFamily: 'Poppins_400Regular',
    },
    subtitulo:{
        fontSize: 30,
        color: '#041542',
        fontFamily: 'Poppins_700Bold',
    },
    nome:{
        fontSize: 30,
        color: '#041542',
        fontFamily: 'Poppins_400Regular',
    },
    texto:{
        fontSize: 18,
        alignContent: 'center',
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
    },
    container: {
        width: 366,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: '#D2D2D2',
        borderWidth: 2,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        marginVertical: 30,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10
    },
    input: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        color: '#5A5A5A',
    }
})