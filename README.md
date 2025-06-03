# VIAGEM360 - APLICATIVO DE VIAGENS

**Viagem360** é um aplicativo mobile desenvolvido com **React Native** e **Expo**, projetado para ajudar viajantes a explorar destinos e descobrir experiências únicas ao redor do mundo.

# FUNCIONALIDADES

- Explorar destinos turísticos com informações detalhadas
- Interface amigável e responsiva

# TECNOLOGIAS UTILIZADAS 

- React Native
- Expo
- React Navigation
- Firebase

# COMO RODAR O PROJETO

1. Clone o repositório: 
    
    git clone https://github.com/MaluCalland/Viagem360.git

2. Abra a pasta: 
    
    cd Viagem360

3. Instale as dependências: 
    
    npm install

4. Configure o Firebase: 

**Passos**

* Ative os serviços: 
    
    Authentication (modo Email/Senha ou outro de sua escolha)

* Localize o arquivo:
    
    ./src/services/firebaseConfig.js

* Atualize com as credencias do Firebase: 

    export const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
    };

5. Execute o app
    
    npx expo start