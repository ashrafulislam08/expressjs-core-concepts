import express, { Request, Response } from "express";
import client from "../../config/mongodb";

const todos = [
        {
            id: 1,
        title: "Make a website",
        duration: '1 hours',
        isCompleted: false,
    },
    {
        id: 2,
        title: "Work on Machine Learning",
        duration: '4 hours',
        isCompleted: true,
    },
    {
        id: 3,
        title: "Make a Todo App",
        duration: '1 hours',
        isCompleted: true,
    },
    {
        id: 4,
        title: "Make a website",
        duration: '1 hours',
        isCompleted: false,
    },
    {
        id: 5,
        title: "Make a website",
        duration: '1 hours',
        isCompleted: false,
    }
    ]

const todoRouter = express.Router();

todoRouter.get("/", (req: Request, res: Response) => {
    // const { isCompleted } = req.query.isCompleted || false;
    // if(isCompleted) {
    //     const filteredTodos = todos.filter((todo) => todo.isCompleted == isCompleted);
    //     return res.json(filteredTodos);
    // }
    res.json(todos);
})


todoRouter.get("/:id", (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const getTodo = todos.find(todo => todo.id === id);
    res.send(getTodo);
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

export default todoRouter;