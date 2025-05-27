// AppNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PaginaPrincipal from './screens/principal';
import ProfileScreen from './screens/ProfileScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Alert } from 'react-native';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Início">
      <Drawer.Screen name="Início" component={PaginaPrincipal} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Favoritos" component={FavoritesScreen} />
      <Drawer.Screen
        name="Sair"
        component={() => {
          Alert.alert("Logout", "Você saiu!");
          return null;
        }}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
