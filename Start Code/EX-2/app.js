import express from 'express';
import articleRoutes from './routes/articleRoutes.js';
import logger from './middleware/logger.js';

const app = express();

app.use(express.json());
app.use(logger);
app.use('/articles', articleRoutes);

export default app;