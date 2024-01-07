const express = require("express")
const { createTodo, updateTodo } = require("./types");

const app = express();

app.use(express.json());

app.get("/todos", (req, res) => {
    
});

app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent me the wrong message body lmaoooo",
        });
        return;
    }
    // so stuff with mongodb
});

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent me wrong update payload",
        });
        return;
    }
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});

