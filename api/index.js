import express from 'express';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.listen(8001, () => {
    console.log('Rodando na porta 8001!');
})