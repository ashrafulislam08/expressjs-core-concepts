"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = __importDefault(require("../../config/mongodb"));
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
todoRouter.post("/create-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority, isCompleted } = req.body;
    const db = yield mongodb_1.default.db("todosDB");
    const collection = yield db.collection("todos");
    yield collection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isCompleted: isCompleted
    });
    console.log(req.body);
    const todos = yield collection.find().toArray();
    res.json(todos);
}));
exports.default = todoRouter;
