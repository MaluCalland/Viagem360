// import { StyleSheet} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import CriandoLogin from './src/screens/login.js';
// import Cadastro from './src/screens/cadastro';
// import PaginaPrincipal from './src/screens/principal';

// import { useAuth } from './src/services/autentificacao';
// import DrawerRoutes from './src/navigation/drawerRoutes';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const user = useAuth(); 

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName={user ? "Principal" : "Login"}>
//         <Stack.Screen name="Login" component={CriandoLogin} />
//         <Stack.Screen name="Cadastro" component={Cadastro} />
//         <Stack.Screen name="Início" component={PaginaPrincipal} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CriandoLogin from './src/screens/login';
import Cadastro from './src/screens/cadastro';
import DrawerRoutes from './src/navigation/drawerRoutes';

import { useAuth } from './src/services/autentificacao'; // seu hook que controla o user logado
import PaginaPrincipal from './src/screens/principal';
import Detalhes from './src/screens/detalhes.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const user = useAuth(); // retorna null ou user object

  return (
    
    <NavigationContainer>
      {user ? (
        <DrawerRoutes />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={CriandoLogin} />
              <Stack.Screen name="Início" component={PaginaPrincipal} />
              <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}


