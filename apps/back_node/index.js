const express = require("express");
const cors = require("cors");

const PORT = 3000;
const app = express();

app.use(cors());
app.use("user", require("./routes/userRoutes"));

app.get("/", (req, res) => {
    res.send("hello from the back end");
});

app.listen(PORT, () => console.log(`serveur lancé sur http://localhost:${PORT}`));
