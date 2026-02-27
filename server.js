import http from 'node:http';

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.write("Some data... \n");      // 'res.write' precisa (obrigatório) que o método 'res.end' seja implementado no final
    
    res.write("More data... \n");
    
    res.end("Hello from server!", () => {
        console.log("Response closed!");
    });  // Aceita até três params: Dado, Codificação (ex: utf-8) e uma Função de Callback
});

server.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});