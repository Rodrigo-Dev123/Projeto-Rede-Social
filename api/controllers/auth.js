import { db } from '../conect.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (!username) {
        return res.status(422).json({ message: 'O nome é obrigatório!' });
    }

    if (!email) {
        return res.status(422).json({ message: 'O email é obrigatório!' });
    }

    if (!password) {
        return res.status(422).json({ message: 'O password é obrigatório!' });
    }

    if (password !== confirmPassword) {
        return res.status(422).json({ message: 'As senhas não são iguais!' });
    }

    db.query('SELECT email FROM user WHERE email = ?', [email], async (error, data) => {
        if (error) {
            console.log(error)
            return res.status(500).json({ message: 'Aconteceu algum erro no servidor, tente novamente mais tarde.' });
        }

        if (data.length > 0) {
            return res.status(500).json({ message: 'Este email já está sendo utilizado!' })
        } else {
            const passwordHash = await bcrypt.hash(password, 8);
            db.query(
                "INSERT INTO user SET ?", { username, email, password: passwordHash },
                (error) => {
                    if (error) {
                        console.log(error)
                        return res.status(500).json({ message: 'Aconteceu algum erro no servidor, tente novamente mais tarde.' });
                    } else {
                        res.status(200).json({ message: 'Cadastro efetuado com sucesso!' });
                    }
                }
            )
        }
    })
}

export const login = (req, res) => {
    const { email, password } = req.body;

    db.query(
        'SELECT * FROM user WHERE email = ?', [email], async (error, data) => {
            if (error) {
                console.log(error)
                return res.status(500).json({ message: 'Aconteceu algum erro no servidor, tente novamente mais tarde.' });
            }

            if (data.length === 0) {
                return res.status(404).json({ message: 'Usuário não encontrado!' });
            } else {
                const user = data[0];
                console.log(user);
                const checkPassword = await bcrypt.compare(password, user.password)

                if (!checkPassword) {
                    return res.status(422).json({ message: 'Senha incorreta!' });
                }

                try {
                    const refreshToken = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + 24 * 60,
                        id: user.password
                    },
                        process.env.REFRESH,
                        { algorithm: 'HS256' }
                    )

                    const token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + 3600,
                        id: user.password
                    },
                        process.env.TOKEN,
                        { algorithm: 'HS256' }
                    )

                    res.status(200).json({ message: 'Usuário logado com sucesso!', token, refreshToken })
                } catch(err) {
                    console.log(err);
                    return res.status(500).json({ message: 'Aconteceu algum erro no servidor, tente novamente mais tarde.' });
                }
            }
        }
    )
}