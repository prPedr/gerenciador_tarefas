// Importacao das bibliotecas nativas
import http from "http"

// Importacao das bibliotecas externas
import {v4} from uuid

// Criacao das funcoes

const porta = 3000 // Porta em que o servidor ira rodar
const tarefas = [] // Armazena em memoria (Perde tudo ao reiniciar)

const servidor = http.createServer((request, response) => {
    const {method, url} = request
})