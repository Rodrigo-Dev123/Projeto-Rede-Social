import express from 'express';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.listen(8001, () => {
    console.log('Rodando na porta 8001!');
})