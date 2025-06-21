import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://l2m3:DWQjd0wplIn3FHby@cluster3.ggy8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
