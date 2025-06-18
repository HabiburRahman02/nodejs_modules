import express, { Request, Response } from "express"
const router = express.Router();

router.get('/', (req:Request, res:Response)=>{
    res.send('All Products')
})

router.post('/', (req:Request, res:Response)=>{
    res.send('Create Product')
})


export default router;