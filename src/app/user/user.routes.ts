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
