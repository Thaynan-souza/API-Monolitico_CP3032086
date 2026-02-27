# API REST - Gerenciamento de Usuários

API REST monolítica desenvolvida para gerenciamento de usuários, contemplando operações de CRUD. O projeto utiliza banco de dados relacional local e segue uma arquitetura baseada em camadas, com acesso direto ao banco (sem ORM).

## Tecnologias

- Node.js (versão LTS)
- Express
- SQLite3

## Estrutura de Pastas

A aplicação foi organizada separando as responsabilidades de cada camada:

- `src/database/db.js`: Conexão com o SQLite e criação da tabela.
- `src/services/user.service.js`: Lógica de negócio e execução de queries SQL.
- `src/controllers/user.controller.js`: Validação das requisições e retorno de respostas HTTP.
- `src/routes/user.routes.js`: Definição das rotas da aplicação.
- `src/app.js`: Configuração do servidor Express.

## Instruções de Execução

1. Clone o repositório para sua máquina:
   ```bash
   git clone [https://github.com/Thaynan-souza/API-Monolitico_CP3032086.git]
