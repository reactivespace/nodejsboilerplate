import { Request } from "express";
declare global {
    namespace Express {
    //Add more fields here as need and also add them in the JwtPayload as well
      interface User {
        userId: string;
      }
      interface Request {
        user?: User | undefined;
      }
    }
  }