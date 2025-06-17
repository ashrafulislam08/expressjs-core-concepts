import express, { Request, Response } from "express";
import client from "../../config/mongodb";
import { ObjectId } from "mongodb";

const userRouter = express.Router();


userRouter.get("/", async(req: Request, res: Response) => {
    const db = await client.db("todosDB");
    const collection = await db.collection("users");
    const cursor = collection.find({});
    const users = await cursor.toArray();

res.json(users);
})



userRouter.get("/:id", async(req: Request, res: Response)  => {
    const id = req.params.id;
    const db   = await client.db("todosDB");
    const collection = await db.collection("users");
    const filter = { _id: new ObjectId(id)};
    const user = await collection.findOne(filter);
    res.json(user);
})