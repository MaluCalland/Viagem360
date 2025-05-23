import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CriandoLogin from './src/navigation/login';
import Cadastro from './src/navigation/cadastro';
import PaginaPrincipal from './src/navigation/principal';

import { useAuth } from './src/services/autentificacao';

const Stack = createNativeStackNavigator();

export default function App() {
  const user = useAuth(); //verifica se usuario esta logado

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Principal" : "Login"}>
        <Stack.Screen name="Login" component={CriandoLogin} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Principal" component={PaginaPrincipal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
