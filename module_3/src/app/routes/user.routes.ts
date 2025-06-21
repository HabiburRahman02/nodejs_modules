import express, { Request, Response } from "express"
import { client } from "../../config/db";
import { ObjectId } from "mongodb";
const router = express.Router();


router.get('/', async (req: Request, res: Response) => {
    const userCollection = await client.db("l2m3").collection('users')
    const result = await userCollection.find().toArray();
    res.send(result)
})
router.get('/:id', async (req: Request, res: Response) => {
    const {id} = req.params
    const userCollection = await client.db("l2m3").collection('users')
    const result = await userCollection.findOne({_id: new ObjectId(id)})
    res.send(result)
})

router.post('/', async (req: Request, res: Response) => {
    const userCollection = await client.db("l2m3").collection('users')
    const { name, email } = req.body;
    const result = await userCollection.insertOne({ name, email });
    res.send(result)
})
router.put('/:id', async (req: Request, res: Response) => {
    const {id} = req.params
    const userCollection = await client.db("l2m3").collection('users')
    const data = req.body;
    const result = await userCollection.updateOne({_id: new ObjectId(id)}, {$set: data},{ upsert: true})
    res.send(result)
})


export default router;