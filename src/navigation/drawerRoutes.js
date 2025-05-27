// src/DrawerRoutes.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PaginaPrincipal from '../screens/principal.js';
import ProfileScreen from '../screens/perfil.js';
import FavoritesScreen from '../screens/favoritos.js';
import SairScreen from '..//components/sair.js';
import CriandoLogin from '../screens/login.js';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={CriandoLogin} />
      <Drawer.Screen name="Principal" component={PaginaPrincipal} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Favoritos" component={FavoritesScreen} />
      <Drawer.Screen
        name="Sair"
        component={SairScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
