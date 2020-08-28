# Desafio 3 - Criando uma API Rest com o Nest.js

#### 🎲 OpenID Connect e Keycloak

Nesse desafio será realizado o get started disponibilizado no site oficial do Keycloak. A idéia principal é rodar o keycloak utilizando docker em seu computador<br>
Para isso, primeiro verifique se tem o [Node.js](https://nodejs.org/en/), o [Docker](https://docs.docker.com/engine/install/) e, opcionalmente, as dependencias do [GO] (https://golang.org/doc/install).
Estaremos utilizando o Linux para esse desafio.

#### 🧭 Criando aplicação NodeJS

```bash

# No seu terminal, utilize esse comando
$ docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:11.0.1

# Isso irá iniciar o Keycloak no localhost:8080, que pode ser acessado no navegador escrevendo
$ localhost:8080

# A senha e o login será admin

```

#### 🧭 Crie um realm

```bash

# Um realm no Keycloak permite a criação de grupos isolados de aplicativos e usuários. 
# Por padrão, há um único reino no Keycloak chamado master. 
# Vamos criar nosso primeiro realm, acesse no navegador:

$ http://localhost:8080/auth/admin

# Passe o mouse sobre a lista no canto superior onde está escrito master e clique em add realm
# Preencha o formulário com os seguintes valores:

$ name: myrealm

# Clique em create

```

#### 🧭 Crie um user

```bash

# Por padrão na há usuários, então vamos criar um. 
# No navegador digite:

$ http://localhost:8080/auth/admin

# Clique em users e em add user
# Preencha o formulário com os seguintes valores:

$ username: myuser

$ first name: <Seu_primeiro_nome>
$ last name: <Seu_sobrenome>

$ Clique em Save

# O usuário precisará de uma senha inicial definida para poder fazer o login. Para fazer isso:
# Clique em credentials (parte superior da página)
# Preencha o formulário 
# Clique em OPEN ao lado de Temporário para evitar ter que atualizar a senha no primeiro login

# Vamos agora tentar fazer login no console da conta para verificar se o usuário está configurado corretamente.
# No navegador digite:
$ http://localhost:8080/auth/realms/myrealm/account

# Faça login com myuser e a senha que você criou anteriormente

```

#### 🧭 Crie um user

```bash

Proteja sua primeira aplicação
# A primeira etapa é registrar este aplicativo com sua instância Keycloak:
# No navegador digite:
$ http://localhost:8080/auth/admin

# Clique em 'clients'

# Preencha o formulário com os seguintes valores:

$ client ID: myclient
$ client Protocol: openid-connect
$root URL: https://www.keycloak.org/app/

# Essa aplicação SPA acima é a que o site Keycloak disponibiliza para testes.

# Clique em Save
# Agora você pode clicar em Entrar para se autenticar usando o servidor Keycloak iniciado anteriormente.


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
