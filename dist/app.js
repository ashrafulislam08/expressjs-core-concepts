"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Server is okay');
});
app.get('/todos', (req, res) => {
    const title = req.query.title;
    res.send(`
            <h1> Todo Route</h1>
            <h3>Title: ${title}</h3>
        `);
});
app.get("/todos/:id", (req, res) => {
    console.log(req.params.id);
});
app.post('/todos/create-todo', (req, res) => {
    res.send('Hello Sudir Bhai');
});
exports.default = app;
