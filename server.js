const http = require("http");
const app = require("./app.js");

const PORT = process.env.PORT || 3004;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
});