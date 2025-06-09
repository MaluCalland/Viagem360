import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from './src/hook/autentificacao.js';
import CriandoLogin from './src/screens/login';
import DrawerRoutes from './src/navigation/drawerRoutes';
import PaginaPrincipal from './src/screens/principal';
import Detalhes from './src/screens/detalhes.js';
import Cadastro from './src/screens/cadastro.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const user = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={CriandoLogin} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

