# 🔐 App de Criptografia com Cifra de César

Este é um aplicativo mobile desenvolvido em **React Native** com **Expo**, que realiza **criptografia** e **decriptografia** de mensagens utilizando a **Cifra de César**. Além disso, o sistema implementa um mecanismo de **hash de uso único**, garantindo que uma mensagem criptografada só possa ser decriptada uma vez.

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

- **[React Native](https://reactnative.dev/)** – Framework para desenvolvimento mobile multiplataforma.
- **[Expo](https://expo.dev/)** – Plataforma que facilita o desenvolvimento, build e deploy de apps React Native.
- **[React Navigation](https://reactnavigation.org/)** – Biblioteca de navegação entre telas.
- **[React Native Paper](https://callstack.github.io/react-native-paper/)** – Componentes prontos com suporte a temas (utilizado o tema escuro).
- **[Axios](https://axios-http.com/)** – Cliente HTTP para requisições REST com o backend.

### 🛠 Backend (API)

- **[Node.js](https://nodejs.org/)** – Ambiente de execução JavaScript.
- **[Express.js](https://expressjs.com/)** – Framework web para criação da API REST.
- **Lógica de Cifra de César** – Implementada para criptografar e decriptar as mensagens com base no passo informado.
- **Hash de Uso Único** – Cada mensagem criptografada é associada a um hash que só pode ser usado uma vez, evitando múltiplas decriptações.

---

## 🌐 Estrutura de Repositório

