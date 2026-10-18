const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        online: true,
        server: "FF Server",
        status: "online"
    });
});

app.get("/health", (req, res) => {
    res.json({
        online: true
    });
});

app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        server: "online"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor online na porta ${PORT}`);
});