// Importação do express
const express = require('express')

// Inicializa o express e armazena na const app
const app = express()

// Define que, utilizando o método "get", na rota "/message", o servidor responderá, através do método "response.send", "Hello World". Na callback para os métodos, é possível capturar o "request" e o "response", sempre nessa ordem. Route Params é o nome que se dá aos dois itens que aparecem na rota depois do ":", como id e user.
app.get('/message/:id/:user', (request, response) => {
  // Desestruturando "id" e "user" de dentro do "request.params"
  const { id, user } = request.params

  response.send(`Mensagem ID: ${id}.
  Para o usuário: ${user}`)
})

// Criada a rota que usa o Query Params.
app.get('/users', (request, response) => {
  const { page, limit } = request.query

  response.send(`Página: ${page}. Mostrar: ${limit}`)
})

// Define o valor de PORT como 3333
const PORT = 3333

// Faz com que o app passe a ouvir a porta (3333), e, quando iniciado, executa a arrow function retornando o log
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
