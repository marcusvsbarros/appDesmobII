# 🔐 App de Criptografia com Cifra de César

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000000?style=for-the-badge&logo=expo&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Navigation](https://img.shields.io/badge/React_Navigation-000000?style=for-the-badge&logo=reactrouter&logoColor=white)
![React Native Paper](https://img.shields.io/badge/React_Native_Paper-6200EE?style=for-the-badge&logo=react&logoColor=white)

Este é um aplicativo mobile desenvolvido em **React Native** com **Expo**, que realiza **criptografia** e **decriptografia** de mensagens utilizando a **Cifra de César**. O sistema utiliza **hash de uso único**, garantindo que uma mensagem só possa ser decriptada uma vez.

---

## 📱 Funcionalidades

- **Criptografar mensagens** com a Cifra de César.
- **Gerar um hash exclusivo** vinculado à mensagem criptografada.
- **Validar hash** para permitir apenas uma decriptação por mensagem.
- Interface com **tema escuro** para melhor experiência do usuário.
- Comunicação com **API backend em Node.js** para processamentos de segurança.

---

## 🚀 Tecnologias Utilizadas

### 📦 Frontend (Mobile)

- **[React Native](https://reactnative.dev/)** – Framework mobile multiplataforma.
- **[Expo](https://expo.dev/)** – Plataforma para build e execução de apps React Native.
- **[React Navigation](https://reactnavigation.org/)** – Navegação entre telas.
- **[React Native Paper](https://callstack.github.io/react-native-paper/)** – UI components com suporte a temas (dark mode).
- **[Axios](https://axios-http.com/)** – Cliente HTTP para chamadas REST.

### 🛠 Backend (API)

- **[Node.js](https://nodejs.org/)** – Ambiente de execução JavaScript.
- **[Express.js](https://expressjs.com/)** – Framework leve para APIs REST.
- **[MongoDB](https://www.mongodb.com/)** – Banco de dados NoSQL utilizado para armazenar os hashes.
- **Lógica da Cifra de César** – Implementada com suporte a passo positivo e negativo.
- **Hash de Uso Único** – Mecanismo para impedir reutilização de mensagens com controle persistente em banco.

---

## 🌐 Estrutura do Projeto

