<div align="center">
  <img src="./.github/logo.png" alt="Happy" />

  <img src="https://img.shields.io/badge/Happy-NLW%203.0-%230fc1cb?style=for-the-badge" alt="NLW3.0" />

  <a href="./LICENSE.md">
    <img src="https://img.shields.io/badge/LICENSE-MIT-%230fc1cb?style=for-the-badge" alt="LICENSE" />
  </a>
  
  <a href="https://app.rocketseat.com.br/me/azanniel">
    <img src="https://img.shields.io/badge/Rocketseat-Azanniel-%230fc1cb?style=for-the-badge" alt="Rocketseat-profile" />
  </a>

  > 💜 Projeto desenvolvido na NLW#3 voltado para conectar pessoas que queiram visitar crianças em orfanatos e levar feliciadade a elas 🚀
</div>

<hr>
  <div align="center">
    <img src="./.github/preview.png" />
  </div>
<hr>

## 💻 Web

Frontend Web construíndo usando as seguintes tecnologias e ferramentas:
- **[React](https://pt-br.reactjs.org/)**
- **[Typescript](https://www.typescriptlang.org/)**
- **[Styled Components](https://styled-components.com/)**
- **[Leaflet](https://leafletjs.com/)**
- **[MapBox](https://www.mapbox.com/)**


<details>
  <Summary>Mais detalhes</Summary>

  #### 🏡 Requisitos

  1. Certifique-se de adicionar ao arquivo **.env** o token do MAPBOX que é feito no site do mesmo

  2. Tenha o backend rodando em background e certifique-se que o arquivo `web/src/services/api.ts` esteja referenciando o mesmo

  #### 👷 Como Executar localmente

  ```bash
    # Vá para pasta web
    cd Happy/web

    # Instale as dependências
    npm install

    # Execute a aplicação
    npm start
  ```

  ⚠️ Obs.: Caso esteja com o backend certifique-se de que ele esteja em execução

  Após isso acesse: http://localhost:3000
</details>

## 📱 Mobile

Frontend Mobile construíndo usando as seguintes tecnologias e ferramentas:
- **[React Native](https://reactnative.dev/)**
- **[Expo](https://expo.io/)**
- **[Typescript](https://www.typescriptlang.org/)**
- **[Styled Components](https://styled-components.com/)**


<details>
  <Summary>Mais detalhes</Summary>

  #### 🏡 Requisitos

  1. Certifique-se que o expo-cli esteja instalado na sua máquina, caso não utilize `npm i -g expo-cli`;

  2. Para uso das requisições e busca na API certifique-se que o backend esteja em execução e que esteja utilizando o IP da máquina e não a nomenclatura **localhost**.

  #### 👷 Como Executar localmente

  ```bash
    # Vá para pasta mobile
    cd Happy/mobile

    # Instale as dependências
    npm install

    # Execute a aplicação onde abrirá o DevTools para executar no dispositivo ou no emulador
    npm start
  ```
</details>

## 🏭 Backend

O Backend foi construído usando as seguintes tecnologias e ferramentas:
- **[Typescript](https://www.typescriptlang.org/)**
- **[Nodejs](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/pt-br/)**
- **[Yup](https://github.com/jquense/yup)**
- **[SQLite3](https://www.npmjs.com/package/sqlite3)**
- **[Typeorm](https://typeorm.io/)**
- **[Eslint](https://eslint.org/)**

<details>
  <Summary>Mais detalhes</Summary>

  #### 👷 Como Executar localmente

  ```bash
    # Vá para pasta backend
    cd Happy/backend

    # Instale as dependências
    npm install

    # Execute as migrations
    npm run migrate:run

    # Coloque o servidor para iniciar em modo dev
    npm run dev
  ```

  Após esses passos a API estará disponível no endereço http://localhost:3333

  #### 🌀 Como importar as rotas para o insomnia

  Para importar as rotas para o insomnia basta clicar no botão abaixo ou fazer o download do .json na pasta .github

  [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=HappyApi&uri=https%3A%2F%2Fraw.githubusercontent.com%2FAzanniel%2FHappy%2Fmaster%2F.github%2FInsomnia_happy.json)

</details>

## 🎉 Agradecimentos

Meu agradecimento especial à todos que puderam ajudar-me à alavancar meus conhecimentos, sempre manter-me atualizado com as novas tecnologias e subir para o próximo nível

<a href="https://github.com/Rocketseat">
  <img src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4" width="50px" />
</a>

<a href="https://github.com/rocketseat-education">
  <img src="https://avatars3.githubusercontent.com/u/69590972?s=200&v=4" width="50px" />
</a>

<a href="https://github.com/diego3g">
  <img src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" width="50px" />
</a>

## 📖 Licença

Realizado em 2020

Esse projeto está licenciado pela MIT LICENSE. Para mais informações, leia o arquivo [LICENSE](./LICENSE.md).