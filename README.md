# Boas vindas ao projeto Blogs API!

Esse projeto foi desenvolvido durante o curso de Desenvolvimento Web da Trybe.

Neste projeto foi feito uma API de um CRUD posts de blog (com o Sequelize).

Criando primeiro uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, criando também uma tabela de Categorias para seus Posts e por fim a tabela de Posts será seu foco.

## Habilidades 

Nesse projeto, você vai construir um back-end usando `ORM` com o pacote `sequelize` do `npm`, e será capaz de:
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`

<details>
  <summary>
    <h3>
      Antes de começar a desenvolver
    </h3>
    </summary>

1. Clone o repositório
  * `git clone https://github.com/mabiiak/blogs-api.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd blogs-api`

2. Instale as dependências
  * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b nome-blogs-api`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'descrição commit'`
        * `git status`

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin nome-blogs-api`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/mabiiak/blogs-api/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/mabiiak/blogs-api/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary>
    <h3>
      Variaveis de ambiente
    </h3>
    </summary>

**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

`blogs-api/config/config.js`

```
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```

**(Neste arquivo é obrigatório deixar o nome do database como `"database": 'blogs_api'`)**

**É essencial usar essas 3 variáveis no arquivo acima:**

#### Variáveis:

`host: process.env.HOSTNAME`

`user: process.env.MYSQL_USER`

`password: process.env.MYSQL_PASSWORD`

**Com elas que iremos conseguir conectar ao banco do avaliador automático**

**⚠️ Variáveis de ambiente além das especificadas acima não são suportadas, pois não são esperadas pelo avaliador do projeto. ⚠️**

</details>

## Lista de Requisitos:

    ✅ 1 - Sua aplicação deve ter o endpoint POST `/user`

    ✅ 2 - Sua aplicação deve ter o endpoint POST `/login`

    ✅ 3 - Sua aplicação deve ter o endpoint GET `/user`

    ✅ 4 - Sua aplicação deve ter o endpoint GET `/user/:id`

    ✅ 5 - Sua aplicação deve ter o endpoint POST `/categories`

    ✅ 6 - Sua aplicação deve ter o endpoint GET `/categories`

    ❌ 7 - Sua aplicação deve ter o endpoint POST `/post`

    ✅ 8 - Sua aplicação deve ter o endpoint GET `/post`

    ✅ 9 - Sua aplicação deve ter o endpoint GET `post/:id`

    ❌ 10 - Sua aplicação deve ter o endpoint PUT `/post/:id`

## Bônus

    ❌ 11 - Sua aplicação deve ter o endpoint DELETE `post/:id`

    ❌ 12 - Sua aplicação deve ter o endpoint DELETE `/user/me`

    ❌ 13 - Sua aplicação deve ter o endpoint GET `post/search?q=:searchTerm`
