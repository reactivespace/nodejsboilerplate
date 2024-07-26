import express from 'express';
import cors from 'cors';
import logger from './middleware/logger';
import routes from './routes/index';
import { config } from './config/config';

const app = express();

// Middleware
app.use(cors());
app.use(logger);
app.use(express.json()); // For parsing application/json
// Routes
app.use('/api/hello', routes);

app.get('/', (req, res) => {
    res.send('Welcome to the Express TypeScript boilerplate!');
});

export default app;
