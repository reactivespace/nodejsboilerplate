import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JwtPayload } from '../types/jwt-decoded-payload';
import { error } from 'console';



const secretKey = process.env.JWT_SECRET || 'your-secret-key';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (token === null) {
    return res.status(401).send({error:'Unauthorized',success:false}); // Unauthorized
  }
  const user= jwt.verify(token,secretKey) as JwtPayload;
    req.user = user;
    next();
};
