import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PaginaPrincipal from '../screens/principal';
import CriandoLogin from '../screens/login';
import Detalhes from '../screens/detalhes';
import Cadastro from '../screens/cadastro';
import Perfil from '../screens/perfil';
import Sair from '../components/sair';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#387CFF', 
        drawerInactiveTintColor: '#5A5A5A',
        drawerLabelStyle: {
          fontSize: 18,
          fontFamily: 'Poppins_400Regular',
        },
        drawerStyle: {
          backgroundColor: '#FFFFFF', 
          width: 250,
        },
      }}
    >
      <Drawer.Screen name='Login' component={CriandoLogin} />
      <Drawer.Screen name="Início" component={PaginaPrincipal} />
      <Drawer.Screen name="Cadastro" component={Cadastro} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Detalhes" component={Detalhes} />
      <Drawer.Screen name="Sair" component={Sair} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
