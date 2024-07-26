import * as dotenv from 'dotenv';

dotenv.config();
//All config related values here
export const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  jwtSecretKey:process.env.JWT_SECRET ||'Or Add here'
};
