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
const mongodb_2 = require("mongodb");
const userRouter = express_1.default.Router();
userRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongodb_1.default.db("todosDB");
    const collection = yield db.collection("users");
    const cursor = collection.find({});
    const users = yield cursor.toArray();
    res.json(users);
}));
userRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_1.default.db("todosDB");
    const collection = yield db.collection("users");
    const filter = { _id: new mongodb_2.ObjectId(id) };
    const user = yield collection.findOne(filter);
    res.json(user);
}));
userRouter.post("/create-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const newUser = {
        name: name,
        email: email,
    };
    const db = yield mongodb_1.default.db("todosDB");
    const collection = yield db.collection("users");
    const insertedUser = yield collection.insertOne(newUser);
    res.json(insertedUser);
}));
userRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_1.default.db("todosDB");
    const collection = yield db.collection("users");
    const deletedUser = collection.deleteOne({ _id: new mongodb_2.ObjectId(id) });
    res.json(deletedUser);
}));
exports.default = userRouter;
