import React, { useState , useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { auth, db } from '../services/firebaseConfig';
import { doc, getDoc, setDoc, updateDoc  } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';


export default function Perfil() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        carregarDados(user.uid);
      } else {
        setCarregando(false);
      }
    });
  
    return () => unsubscribe();
  }, []);
  
  const carregarDados = async (uid) => {
    try {
      const docRef = doc(db, 'usuarios', uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const dados = docSnap.data();
        setNome(dados.nome || '');
        setEmail(dados.email || '');
      }
    } catch (erro) {
      console.error("Erro ao carregar dados do perfil:", erro);
      Alert.alert('Erro', 'Não foi possível carregar os dados do perfil.');
    }
    setCarregando(false);
  };

  const salvarDados = async () => {
    const user = auth.currentUser;
    if (user) {
      setSalvando(true);
      try {
        const docRef = doc(db, 'usuarios', user.uid);
        await updateDoc(docRef, {
          nome: nome,
          email: email,
        });
        Alert.alert('Sucesso', 'Dados salvos com sucesso!');
      } catch (erro) {
        console.error("Erro ao salvar dados do perfil:", erro);
        Alert.alert('Erro', 'Não foi possível salvar os dados.');
      }
      setSalvando(false);
    }
  };
  
  return (
    <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={estilos.titulo}>Perfil</Text>

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
      <TouchableOpacity style={estilos.botao} onPress={salvarDados} disabled={salvando}>
        {salvando ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text style={estilos.textoBotao}>Salvar</Text>
        )}
      </TouchableOpacity>

    </View>
  );
}

const estilos = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    padding: 8
  },
  titulo: {
      fontSize: 30,
      alignItems: 'center',
      color: '#041542',
      fontFamily: 'Poppins_700Bold', 
      letterSpacing: 1.95
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
  textoBotao: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    fontFamily: 'Poppins_700Bold',
    letterSpacing: 2,
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
});
