import express, { Request, Response } from "express";
import client from "../../config/mongodb";
import { ObjectId } from "mongodb";


const todoRouter = express.Router();

todoRouter.get("/", async (req: Request, res: Response) => {
    const db = await client.db("todosDB");
    const collection = await db.collection("todos");
    const cursor =  collection.find({});
    const todos = await cursor.toArray();
    res.send(todos);
})


todoRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const db = await client.db("todosDB");
    const collection = db.collection("todos");
    const todo = await collection.findOne({ _id: new ObjectId(id)})
    res.json(todo);
})

todoRouter.post("/create-todo", async (req: Request, res: Response) => {
    const { title, description, priority, isCompleted} = req.body;
    const db = await client.db("todosDB");
    const collection = await db.collection("todos");
    await collection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isCompleted: isCompleted
    })
    console.log(req.body);
    const todos = await collection.find().toArray();
    res.json(todos)
})

todoRouter.put("/update-todo/:id", async(req: Request, res: Response) => {
    const id = req.params.id;
    const db = await client.db("todosDB");
    const collection = await db.collection("todos");

    const { title, description, priority, isCompleted } = req.body;
    const updatedTodo = {
        title,
        description,
        priority,
        isCompleted,
    }
    
    const update = await collection.updateOne({_id: new ObjectId(id)}, {
        $set: updatedTodo
    });
    res.send(update);
})


todoRouter.delete("/delete-todo/:id", async(req: Request, res: Response) => {
    const id = req.params.id;
    const db = await client.db("todosDB");
    const collection = await db.collection("todos");
    const deletedTodo = await collection.deleteOne({ _id: new ObjectId(id)})
    res.send(deletedTodo);
})


export default todoRouter;