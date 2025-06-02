import { View, Text, StyleSheet, TextInput, ActivityIndicator, Pressable, Image, Alert, TouchableOpacity} from "react-native"; 

export default function Detalhes( {navigation}) { 

    return(
        <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text> Detalhes</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    img:{
        width:200,
        height: 200
    },
    titulo:{
        fontSize: 40,
        alignContent: 'center',
        letterSpacing: 8,
        color: '#041542',
        fontFamily: 'Poppins_700Bold'
    },
    subtitulo:{
        fontSize: 25,
        alignContent: 'center',
        letterSpacing: 4,
        color: '#041542',
        fontFamily: 'Poppins_700Bold',
        marginTop: 20
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
        marginTop: 20,
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
        marginTop: 30,
        padding: 10
    },
    botao:{
        marginTop: 30,
        backgroundColor: "#387CFF",
        width: 195,
        height: 56,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,  
    }
})