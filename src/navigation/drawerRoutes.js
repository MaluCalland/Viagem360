import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import PaginaPrincipal from '../screens/principal';
import ProfileScreen from '../screens/perfil';
import SairScreen from '../components/sair';
import CriandoLogin from '../screens/login';
import Detalhes from '../screens/lugares';
import Cadastro from '../screens/cadastro';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
      <Drawer.Screen name='Login' component={CriandoLogin}/>
      <Drawer.Screen name="Início" component={PaginaPrincipal} />
      <Drawer.Screen name="Cadastro" component={Cadastro} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Sair" component={SairScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
