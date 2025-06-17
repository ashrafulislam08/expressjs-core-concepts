"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_route_1 = __importDefault(require("./app/todos/todo.route"));
const user_routes_1 = __importDefault(require("./app/user/user.routes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use("/todos", todo_route_1.default);
app.use("/users", user_routes_1.default);
app.get('/', (req, res) => {
    res.send('Server is okay');
});
exports.default = app;
