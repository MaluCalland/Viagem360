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
//         <Stack.Screen name="Principal" component={PaginaPrincipal} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CriandoLogin from './src/screens/login';
import Cadastro from './src/screens/cadastro';
import DrawerRoutes from './src/navigation/drawerRoutes'; // <- importa o drawer

import { useAuth } from './src/services/autentificacao';

const Stack = createNativeStackNavigator();

export default function App() {
  const user = useAuth(); // você decide se mostra login ou vai direto pro drawer

  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName={user ? "Principal" : "Login"}>
        {!user ? (
          <>
            <Stack.Screen name="Login" component={CriandoLogin} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
          </>
        ) : (
          <Stack.Screen name="Principal" component={DrawerRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
