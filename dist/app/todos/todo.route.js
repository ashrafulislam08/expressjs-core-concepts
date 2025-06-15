"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
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
];
const todoRouter = express_1.default.Router();
todoRouter.get("/", (req, res) => {
    // const { isCompleted } = req.query.isCompleted || false;
    // if(isCompleted) {
    //     const filteredTodos = todos.filter((todo) => todo.isCompleted == isCompleted);
    //     return res.json(filteredTodos);
    // }
    res.json(todos);
});
todoRouter.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const getTodo = todos.find(todo => todo.id === id);
    res.send(getTodo);
});
todoRouter.post("/create-todo", (req, res) => {
    console.log(req.body);
    res.send("Successfully created a todo to list");
});
exports.default = todoRouter;
