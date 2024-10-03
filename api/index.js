import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import sneakersRouter from './routes/sneakers.route.js';
import adminRouter from './routes/admin.route.js';
import userRouter from './routes/user.route.js';
import authRouter from './routes/authentification.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import http from 'http';

const app = express();
app.use(express.json());
app.use(cookieParser());

// Configuration CORS
const allowedOrigins = ['http://localhost:5173']; // Liste des origines autorisées
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

const expressServer = http.createServer(app);
const PORT = process.env.PORT || 4000;

// Connect to the database
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MONGO_URI environment variable is not defined');
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch(err => console.log(err));

// Routes
app.use('/shop/sneakers', sneakersRouter);
app.use('/shop/admin', adminRouter);
app.use('/shop/user', userRouter);
app.use('/shop/auth', authRouter);

// Deployment settings
const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  const staticFilesPath = path.join(__dirname, 'client', 'dist');
  app.use(express.static(staticFilesPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(staticFilesPath, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API listing...');
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ success: false, statusCode, message });
});

// Start server
expressServer.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

export default () => expressServer;
