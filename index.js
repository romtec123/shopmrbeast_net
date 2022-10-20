const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const PORT = 38466;

app.use(express.static("public"));

server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});