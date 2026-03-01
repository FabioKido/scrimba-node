export const sendJSONResponse = (res, statusCode, payload) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');  // CORS policy - Adimite requisição de vários dominios:portas
    res.setHeader('Access-Control-Allow-Methods', 'GET');   // Permite apenas requisições GET
    res.statusCode = statusCode;
    res.end(JSON.stringify(payload));
};