import express, { Request, Response } from "express";

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
    res.json(todos);
})


todoRouter.get("/:id", (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const getTodo = todos.find(todo => todo.id === id);
    res.send(getTodo);
})

todoRouter.post("/create-todo", (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Successfully created a todo to list")
})

export default todoRouter;