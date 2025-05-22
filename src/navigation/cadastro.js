import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, TextInput, TouchableOpacity, Alert } from "react-native";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  const contaCriada = () => {
    if (senha.length < 6) {
      Alert.alert("Erro", "A senha deve ter no mínimo 6 caracteres.");
      return;
    }
  
    if (!email || !senha || !nome) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, senha)
      .then(userCredential => {
        const user = userCredential.user;
        Alert.alert("Sucesso", "Conta criada com sucesso!");
        console.log("Usuário:", user);
        navigation.navigate('Principal', {nomeUsuario: nome})
      })
      .catch(error => {
        console.error("Erro ao criar conta:", error);
        Alert.alert("Erro", error.message);
      });
  };
  
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#387CFF" />;
  }

  return (
    <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <LinearGradient
        colors={['#387CFF', '#38B7FF']}
        style={estilos.gradientBox}
      >
        <Text style={estilos.subtitulo}>Faça seu cadastro</Text>

        <TextInput
          placeholder="   NOME"
          style={estilos.input}
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          placeholder="   E-MAIL"
          style={estilos.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="   SENHA"
          style={estilos.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={estilos.botao} onPress={contaCriada}>
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