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
const app_js_1 = __importDefault(require("./app.js"));
const mongodb_1 = require("mongodb");
const port = 5000;
let server;
const uri = "mongodb+srv://l2m3:DWQjd0wplIn3FHby@cluster3.ggy8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3";
const client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
const bootstrap = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        yield client.db("l2m3").command({ ping: 1 });
        console.log("✅ Successfully connected to MongoDB");
        server = app_js_1.default.listen(port, () => {
            console.log(`🚀 Server is running on port ${port}`);
        });
    }
    catch (error) {
        console.error("❌ MongoDB connection error:", error);
    }
});
bootstrap();
