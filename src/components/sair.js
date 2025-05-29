import React from 'react';
import { View, Button } from 'react-native';

export default function SairScreen({ navigation }) {
  function handleLogout() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Confirmar Logout" onPress={handleLogout} />
    </View>
  );
}
