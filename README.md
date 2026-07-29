# LP2 - Aplicacao web com Express e EJS

Exercicio da disciplina LP2 (FIAP). Servidor Express que renderiza uma view EJS com dados de aluno, turma e disciplina, e prepara a conexao com o MongoDB via Mongoose.

## Tecnologias

Node.js, Express, EJS e Mongoose.

## Como executar

Pre-requisito: Node.js 18 ou superior.

Instale as dependencias com `npm install` e `npm install dotenv`, copie o arquivo `.env.example` para `.env` e preencha a variavel `MONGODB_URI`. Depois rode `node index.js`. O servidor sobe em http://localhost:3050.

## Configuracao

A string de conexao e lida da variavel de ambiente `MONGODB_URI` e o arquivo `.env` esta ignorado pelo git.
