import http from 'node:http';   // Colocar o "node:" melhora a performance, pois sabe exatamente onde achar o modulo. Serve mais p/ grandes apps.

const PORT = 8000;

const server = http.createServer((req, res) => {
    console.log(`Recurso/path: ${req.url} - Método: ${req.method}`);

    if(req.url === '/api' && req.method === 'GET') {
        res.end("Hello from server 2...")
    }
});

server.listen(PORT, () => {
    console.log(`Server runnign on port: ${PORT}`);
});