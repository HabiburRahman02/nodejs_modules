import app from './app.js';
import { MongoClient, ServerApiVersion } from 'mongodb';

const port = 5000;
let server;

const uri = "mongodb+srv://l2m3:DWQjd0wplIn3FHby@cluster3.ggy8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const bootstrap = async () => {
  try {
    await client.connect();
    await client.db("l2m3").command({ ping: 1 });
    console.log("✅ Successfully connected to MongoDB");

    server = app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

bootstrap();
