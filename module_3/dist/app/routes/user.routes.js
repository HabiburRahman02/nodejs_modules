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
const db_1 = require("../../config/db");
const mongodb_1 = require("mongodb");
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userCollection = yield db_1.client.db("l2m3").collection('users');
    const result = yield userCollection.find().toArray();
    res.send(result);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userCollection = yield db_1.client.db("l2m3").collection('users');
    const result = yield userCollection.findOne({ _id: new mongodb_1.ObjectId(id) });
    res.send(result);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userCollection = yield db_1.client.db("l2m3").collection('users');
    const { name, email } = req.body;
    const result = yield userCollection.insertOne({ name, email });
    res.send(result);
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userCollection = yield db_1.client.db("l2m3").collection('users');
    const data = req.body;
    const result = yield userCollection.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: data }, { upsert: true });
    res.send(result);
}));
exports.default = router;
