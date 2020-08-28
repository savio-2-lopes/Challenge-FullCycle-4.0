# Desafio 3 - Criando uma API Rest com o Nest.js

#### 🎲 API Rest com Nest.js e SQlite
<br>
Nesse desafio devemos criar um recurso de categorias com a URI categories com dois endpoints:

- [ ] GET categories - Consulta de categorias
- [ ] POST categories - Criação de categorias

A aplicação terá um banco de dados SQLite para armazenar os dados, este banco ficará na raiz do projeto e usará o TypeORM para persistência dos dados.

O banco SQLite deverá estar no controle de versão da aplicação e deverá ter 10 categorias cadastradas.

Estaremos utilizando o Linux e o [Insomnia](https://insomnia.rest/download/) para esse desafio.

#### 🧭 Instalando Nest.js CLI

```bash

# Vamos começar instalando o Nest CLI, que é a ferramenta oficial para gerar projetos Nest.js.
# Abra seu terminal e execute o seguinte comando:

$ npm install -g @nest/cli

```
#### 🧭 Criando projeto Nest.js

```bash

# Depois da instalação, navegue até sua pasta de trabalho e execute o seguinte comando para gerar um projeto:
$ nest new <nome_projeto>

# Após isso acessa a pasta criada e execute
$ cd <nome_projeto>
$ npm run start:dev

#  No navegador digite:
$ http://localhost:3000

# se der tudo certo verá um "Hello World"

```

#### 🧭 Criando a API Rest


```bash

# Siga o código dentro da pasta src deste repositório:

```

#### 🧭 Instalando TypeORM e o banco de dados SQLite


```bash

# Nest.js suporta TypeORM, que é um dos melhores ORM disponíveis no TypeScript.
# Vamos começar instalando as dependências necessárias:

$ npm install --save @nestjs/typeorm typeorm sqlite3
```

#### 🧭 Testando a API

```bash

# No navegador digite:

$ http://localhost:3000/categories

# O resultado tem que ser um array vazio
# Para cadastrar os valores, acesse o Insomnia e crie duas request

$ Listar categorias - GET
$ Criar categorias - POST

# Na de listagem coloque esta request URL
$ http://localhost:3000/categories/

# Na de criar coloque esta request URL

$ http://localhost:3000/categories/create

# Crie dez categorias seguindo esse modelo na request criar:
${ "nome": "categoria 1"}

# Dê um send e vá para a listagem verificar se deu tudo certo.


# Se estiver tudo certo crie dum Dockerfile e cria a imagem da aplicação e por fim de um push no Docker Hub.


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
