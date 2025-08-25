// Importacao das bibliotecas nativas
import http from "http"

// Importacao das bibliotecas externas
import {v4} from "uuid"

// Criacao das funcoes
const porta = 3000 // Porta em que o servidor ira rodar
const tarefas = [] // Armazena em memoria (Perde tudo ao reiniciar)

const servidor = http.createServer((request, response) => {
    const {method, url} = request
    let body = ""

    request.on("data", parte => {
        body += parte.toString()
    })

    request.on("end", () => {
        const id = url.split("/")[2]

        if (url === "/tarefas" && method === "GET") {
            response.writeHead(200, {"Content-Type": "application/json"})
            response.end(JSON.stringify(tarefas))
        } else if (url === "/tarefas" && method === "POST") {
            const {tituloTarefa, descricaoTarefa, dataInicioTarefa, dataConclusaoTarefa, statusTarefa} = JSON.parse(body)
            const novaTarefa = {id: v4(), tituloTarefa, descricaoTarefa, dataInicioTarefa, dataConclusaoTarefa, statusTarefa}
            tarefas.push(novaTarefa)
            response.writeHead(201, {"Content-Type": "application/json"})
            response.end(JSON.stringify(novaTarefa))
        } else if (url.startsWith("/tarefas/") && method === "PUT") {
            const {tituloTarefa, descricaoTarefa, dataInicioTarefa, dataConclusaoTarefa, statusTarefa} = JSON.parse(body)
            const atualizarTarefa = tarefas.find(filtroTarefa => filtroTarefa.id === id)
            if (atualizarTarefa) {
                atualizarTarefa.tituloTarefa = tituloTarefa
                atualizarTarefa.descricaoTarefa = descricaoTarefa
                atualizarTarefa.dataInicioTarefa = dataInicioTarefa
                atualizarTarefa.dataConclusaoTarefa = dataConclusaoTarefa
                atualizarTarefa.statusTarefa = statusTarefa
                response.writeHead(200, {"Content-Type": "application/json"})
                response.end(JSON.stringify(atualizarTarefa))
            } else {
                response.writeHead(404, {"Content-Type": "application/json"})
                response.end(JSON.stringify({mensagem: "Tarefa não encontrada"}))
            }
        } else if (url.startsWith("/tarefas") && method === "DELETE") {
            const deletarTarefa = tarefas.find(filtroTarefa => filtroTarefa.id === id)
            if (deletarTarefa !== -1) {
                tarefas.splice(deletarTarefa, 1)
                response.writeHead(204)
                response.end()
            } else {
                response.writeHead(404, {"Content-Type": "application/json"})
                response.end(JSON.stringify({mensagem: "Tarefa não encontrada"}))
            }
        } else {
            response.writeHead(404, {"Content-Type": "application/json"})
            response.end(JSON.stringify({mensagem: "Rota não encontrada"}))
        }
    })
})

// Ligando o servidor
servidor.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})