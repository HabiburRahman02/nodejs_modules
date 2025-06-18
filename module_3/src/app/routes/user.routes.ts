import express, { Request, Response } from "express"
const router = express.Router();

router.get('/', (req:Request, res:Response)=>{
    res.send('All users')
})

router.post('/', (req:Request, res:Response)=>{
    res.send('Create users')
})


export default router;