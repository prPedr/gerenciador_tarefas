# 📌 API de Tarefas (Node.js + HTTP nativo)

Esta é uma API simples para gerenciamento de tarefas, criada utilizando apenas módulos nativos do **Node.js** e a biblioteca **uuid** para geração de identificadores únicos.

## 🚀 Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [uuid](https://www.npmjs.com/package/uuid)

---

## 📂 Estrutura da API

- **GET /tarefas** → Lista todas as tarefas  
- **POST /tarefas** → Cria uma nova tarefa  
- **PUT /tarefas/:id** → Atualiza uma tarefa existente  
- **DELETE /tarefas/:id** → Remove uma tarefa existente  

---

## ▶️ Como executar o projeto

1. Clone este repositório:
   ```bash
   git clone <url-do-repo>

2. Instale as dependências:
   npm install uuid

3. Inicie o servidor:
   node index.js

4. O servidor estará disponível em:
   http://localhost:3000
   
### 🔹 Listar todas as tarefas: (GET /tarefas)

{
    "id": "d5f8a4a2-7e4c-4d94-9e6d-34cfe3e41c4f",
    "tituloTarefa": "Tarefas do dia",
    "descricaoTarefa": "Comprar pão e passear com o cachorro.",
    "dataInicioTarefa": "25/08/2025",
    "dataConclusaoTarefa": "25/08/2025",
    "statusTarefa": "Concluido"
}

### 🔹 Criar uma nova tarefa: (POST /tarefas)

#### Exemplo de body (JSON):

{
  "tituloTarefa": "Ler sobre HTTP",
  "descricaoTarefa": "Estudar requisições e respostas",
  "dataInicioTarefa": "2025-08-25",
  "dataConclusaoTarefa": "2025-08-27",
  "statusTarefa": "Pendente"
}

#### Resposta:

{
  "id": "d5f8a4a2-7e4c-4d94-9e6d-34cfe3e41c4f",
  "tituloTarefa": "Ler sobre HTTP",
  "descricaoTarefa": "Estudar requisições e respostas",
  "dataInicioTarefa": "2025-08-25",
  "dataConclusaoTarefa": "2025-08-27",
  "statusTarefa": "Pendente"
}

### 🔹 Atualizar uma tarefa (PUT /tarefas/:id)

#### Exemplo de body (JSON):

{
  "tituloTarefa": "Estudar Node.js",
  "descricaoTarefa": "Aprender sobre API REST",
  "dataInicioTarefa": "2025-08-25",
  "dataConclusaoTarefa": "2025-08-28",
  "statusTarefa": "Pendete"
}

#### Resposta:

{
  "id": "d5f8a4a2-7e4c-4d94-9e6d-34cfe3e41c4f",
  "tituloTarefa": "Estudar Node.js",
  "descricaoTarefa": "Aprender sobre API REST",
  "dataInicioTarefa": "2025-08-25",
  "dataConclusaoTarefa": "2025-08-28",
  "statusTarefa": "Concluído"
}

### 🔹 Deletar uma tarefa (DELETE /tarefas/:id)

#### Resposta de sucesso:

Status: 204 No Content

#### Resposta caso não exista:

{
  "mensagem": "Tarefa não encontrada"
}


⚠️ Observações

As tarefas são armazenadas em memória, ou seja, ao reiniciar o servidor todas as tarefas serão perdidas.

Este projeto tem foco educacional para estudos de Node.js sem frameworks externos.