import express, { Application, Request, Response } from 'express';
const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Server is okay')
})

app.get('/todos', (req: Request, res: Response) => {
    const title = req.query.title;
    res.send(`
            <h1> Todo Route</h1>
            <h3>Title: ${title}</h3>
        `)
})

app.get("/todos/:id", (req: Request, res: Response) => {
    console.log(req.params.id);
})


app.post('/todos/create-todo', (req: Request, res: Response) => {
    res.send('Hello Sudir Bhai')
})

export default app;