import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, TextInput, TouchableOpacity, Image } from "react-native";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebaseConfig";
import { doc, setDoc } from 'firebase/firestore';
import { useNavigation } from "@react-navigation/native";

const IconeSucesso = require('../img/sucesso.png'); 
const IconeErro = require('../img/erro.png');       

export default function Cadastro() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState(""); 
  const [loading, setLoading] = useState(false); 

  function traduzirErroFirebase(codigoErro) {
    switch (codigoErro) {
      case 'auth/email-already-in-use':
        return 'Este e-mail já está em uso.';
      case 'auth/invalid-email':
        return 'E-mail inválido.';
      case 'auth/weak-password':
        return 'A senha é muito fraca.';
      default:
        return 'Erro ao criar conta. Tente novamente.';
    }
  }

  const contaCriada = () => {
    setLoading(true); 
    setMensagem("");
    setTipoMensagem("");

    if (senha.length < 6) {
      setTipoMensagem("erro");
      setMensagem("A senha deve ter no mínimo 6 caracteres.");
      setLoading(false); 
      return;
    }

    if (!email || !senha || !nome) {
      setTipoMensagem("erro");
      setMensagem("Preencha todos os campos.");
      setLoading(false); 
      return;
    }

    createUserWithEmailAndPassword(auth, email, senha)
      .then(userCredential => {
        setTipoMensagem("sucesso");
        setMensagem("Cadastro realizado com sucesso!");
        setLoading(false); 

        setTimeout(() => {
          navigation.navigate('Login');
        }, 5000);
      })
      .catch(error => {
        const mensagemErro = traduzirErroFirebase(error.code);
        setTipoMensagem("erro");
        setMensagem(mensagemErro);
        setLoading(false); 
      });
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#387CFF" />;
  }

  return (
    <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <LinearGradient colors={['#387CFF', '#38B7FF']} style={estilos.gradientBox}>
        <Text style={estilos.subtitulo}>Faça seu cadastro</Text>

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

        <TouchableOpacity style={estilos.botao} onPress={contaCriada} disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <Text style={estilos.textoBotao}>Criar conta</Text>
          )}
        </TouchableOpacity>

        {mensagem ? (
          <View style={[
            estilos.mensagemContainer,
            tipoMensagem === "erro" ? estilos.erroContainer : estilos.sucessoContainer
          ]}>
            <Image
              source={tipoMensagem === "erro" ? IconeErro : IconeSucesso}
              style={estilos.iconeMensagem}
            />
            <Text style={[
              estilos.mensagemTexto,
              tipoMensagem === "erro" ? estilos.erroTexto : estilos.sucessoTexto
            ]}>
              {mensagem}
            </Text>
          </View>
        ) : null}
      </LinearGradient>
    </View>
  );
}

const estilos = StyleSheet.create({
  subtitulo: {
    fontSize: 25,
    alignContent: 'center',
    letterSpacing: 4,
    color: '#041542',
    fontFamily: 'Poppins_700Bold',
    marginTop: 33,
  },
  textoBotao: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    fontFamily: 'Poppins_700Bold',
    letterSpacing: 2,
  },
  texto: {
    fontSize: 18,
    alignContent: 'center',
    marginTop: 40,
    color: '#5A5A5A',
    fontFamily: 'Poppins_400Regular',
  },
  input: {
    width: 366,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#5A5A5A',
    borderColor: '#D2D2D2',
    borderWidth: 2,
    marginTop: 33,
    padding: 10
  },
  botao: {
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
  },
  mensagemContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para sombra em Android
  },
  erroContainer: {
    backgroundColor: 'white', 
    width: 300,
    height: 188,
    borderRadius: 20
  },
  sucessoContainer: {
    backgroundColor: 'white', 
    width: 300,
    height: 188,
    borderRadius: 20
  },
  iconeMensagem: {
    width: 100,
    height: 100,
    marginRight: 10,
    resizeMode: 'contain',
  },
  mensagemTexto: {
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
    flexShrink: 1, 
  },
  erroTexto: {
    color: '#5A5A5A',
  },
  sucessoTexto: {
    color: '#5A5A5A',
  },
});