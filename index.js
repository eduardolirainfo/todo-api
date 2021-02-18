import express from "express"
import { promises as fs } from "fs"

const { readFile } = fs
const app = express()
app.use(express.json())


app.get("/todo", async(req, res) =>{
    const data = JSON.parse(await readFile("todos.json"))
    res.send(data);
})

app.listen(8080, ()=>console.log("API Started"))



