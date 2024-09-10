const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");

const PORT = 3000;
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

app.get("/", (req, res) => {
    res.send("hello from the back end");
});

app.listen(PORT, () => console.log(`serveur lancé sur http://localhost:${PORT}`));
