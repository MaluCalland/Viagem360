import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Pressable, Image, Alert, TouchableOpacity} from "react-native"; 
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function CriandoLogin( {navigation}) {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
      });
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [carregando, setCarregando] = useState(false);
    
    const handleLogin = () => {
        if (!email || !senha) {
          Alert.alert("Erro", "Preencha o e-mail e a senha.");
          return;
        }
      
        setCarregando(true);
      
        signInWithEmailAndPassword(auth, email, senha)
          .then(userCredential => {
            const user = userCredential.user;
            console.log("Usuário logado:", user);
            setCarregando(false);
            navigation.navigate('Principal', { nomeUsuario: nome });
          })
          .catch(error => {
            console.log("Erro capturado:", error.code, error.message);
            setCarregando(false);
            Alert.alert("Erro", error.message);
          });
      };
          
      if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#387CFF" />;
      }    

    return(
        <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Image
            source={require('../img/logo.png')}
            style={estilos.img}
            />
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text style={estilos.titulo}>Viagem</Text>
                <Text style={{fontSize: 35, alignContent: 'center', letterSpacing: 8, color: '#ADDAFF', fontFamily: 'Poppins_700Bold'}}>360</Text>
            </View>
            <Text style={estilos.subtitulo}>Seja bem vindo</Text>
            <TextInput
            placeholder="NOME"
            style={estilos.input}
            value={nome}
            onChangeText={setNome}
            />
            <TextInput
            placeholder="E-MAIL"
            style={estilos.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            />
            <TextInput
            placeholder="SENHA"
            style={estilos.input}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            />

            {carregando ? (
            <ActivityIndicator size="large" color="#387CFF" style={{ marginTop: 30 }} />
            ) : (
            <TouchableOpacity style={estilos.botao} onPress={handleLogin}>
                <Text style={estilos.textoBotao}>Entrar</Text>
            </TouchableOpacity>
            )}

            <Text style={estilos.texto}>Não tem conta?</Text>
            <Pressable onPress={() => navigation.navigate('Cadastro')}>
                <Text style={[estilos.texto, {color: '#83A5FF', marginTop: 2}]}>Fazer cadastro</Text>
            </Pressable>
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