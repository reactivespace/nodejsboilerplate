import { Request, Response } from "express";

export const HelloController=(req:Request,res:Response)=>{
    return res.status(200).send('Hello')
}