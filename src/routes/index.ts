import { Router } from 'express';
import { HelloController } from '../controllers';

export const router = Router();

router.get('/',HelloController);


export default router;
