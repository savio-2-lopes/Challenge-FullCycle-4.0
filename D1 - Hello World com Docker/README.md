# Desafio 1 - Hello World com Docker

#### 🎲 Docker e NodeJS

Nesse desafio será criado uma imagem docker que quando executada deverá expor a porta 8080 exibindo a mensagem: Eu sou Full Cycle.<br>

Para isso, primeiro verifique se tem o [Node.js](https://nodejs.org/en/), o [Docker](https://docs.docker.com/engine/install/) e, opcionalmente, o gerenciador de pacotes [Yarn](https://yarnpkg.com)instalados.
Estaremos utilizando o Linux para esse desafio.

#### 🧭 Criando aplicação NodeJS

```bash

# Crie um novo diretório e dentro dele crie o package.json
$ yarn init -y

# Instale a dependencia Express
$ yarn add express

# Crie um arquivo server.js e coloque os seguintes comandos dentro do server.js
$ use strict';
$ const express = require('express');
$ const PORT = 8080;
$ const HOST = '0.0.0.0';
$ const app = express();
$ app.get('/', (req, res) => { res.send('Eu sou Full Cycle'); });
$ app.listen(PORT, HOST);
$ console.log(`Running on http://${HOST}:${PORT}`);
```

#### 🧭 Criando Dockerfile

```bash

# Agora vamos criar um Dockerfile nesse mesmo diretório
$ touch Dockerfile

# Verifique a versão do seu node
$ node -v

# Abra o Dockerfile e adicione os seguintes comandos
$ FROM node:14 # coloque a versão do Node que aparecer no seu
$ WORKDIR /usr/src/app
$ COPY package*.json ./
$ RUN npm install
$ COPY . .
$ EXPOSE 8080
$ CMD [ "node", "server.js" ]

# Crie um arquivo chamado .dockerignore neste mesmo diretório e adicione
$ node_modules
$ npm-debug.log

```
#### 🧭 Testando Imagem criada

```bash

# Agora vamos testar
# Caso você configurou o Docker para trabalhar sem o sudo ou se não possui linux, ignore o sudo abaixo
# Siga os seguintes comandos em seu cmd
$ sudo docker build -t <seu_nome>/<seu_diretorio>

# Verifique se listou sua imagem
$ sudo docker images

# Se sim, vamos carregá-la
$ docker run -p 49160:8080 -d <seu_nome>/<seu_repositorio>

# Verifique o ID da imagem
$ docker ps

# Coloque esse id
$ docker logs <id_imagem>

# Acesse seu navegador em localhost:8080 ou no cmd para vê o resultado.

```


#### 🧭 Fazendo build da Imagem para o Docker Hub

```bash

# Para empurrar sua imagem, primeiro logue no Docker Hub 
$ docker login -u coloque-seu-login-aqui

# Você será solicitado a autenticar-se usando sua senha do Docker Hub. 

# Caso o seu nome de registro no Docker for diferente de seu nome local use:
$ docker tag <nome>/<imagem_docker> <nome_de_registro>/<imagem_docker>

# Então você pode empurrar sua própria imagem usando:
$ docker push <nome_de_registro>/<imagem_docker>

# Após empurrar uma imagem para um registro, ela deve estar listada no painel da sua conta

```


## 🦸 Autor

<a href="https://github.com/savio-2-lopes">
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/60948849?s=460&u=689ef123d3278304945aca213bed7413645ea4a7&v=4" width="100px;" alt=""/>
 <br>
 <sub><b>    Savio Lopes </b></sub></a> <a href="https://github.com/savio-2-lopes" title="Github">  🚀</a>
 <br><br>
 
 
[![Linkedin Badge](https://img.shields.io/badge/savio-lopes-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://https://www.linkedin.com/in/savio-lopes/)](https://www.linkedin.com/in/savio-lopes/) 
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/savio-2-lopes)](https://github.com/savio-2-lopes)
[![Whatsapp Badge](https://img.shields.io/badge/-Whatsapp-4CA143?style=flat-square&labelColor=4CA143&logo=whatsapp&logoColor=white&link=https://api.whatsapp.com/send?phone=12996798894&text=Hello!)](https://api.whatsapp.com/send?phone=12996798894&text=Hello!)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:savioaugulopes@gmail.com)](mailto:savioaugulopes@gmail.com)


Feito com ❤️ por Savio Lopes 👋🏽 [Entre em contato!](https://www.linkedin.com/in/savio-lopes/)
