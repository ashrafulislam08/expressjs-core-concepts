import express, { Application, Request, Response } from 'express';
import todoRouter from './app/todos/todo.route';
const app: Application = express();
const port = 3000;

app.use(express.json());
app.use("/todos", todoRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Server is okay')
})

export default app;