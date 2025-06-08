import express, { Application, Request, Response } from 'express';
const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Server is okay')
})

app.get('/todos', (req: Request, res: Response) => {
    res.send('Todo Route')
})

app.post('/todos/create-todo', (req: Request, res: Response) => {
    res.send('Hello Sudir Bhai')
})

export default app;