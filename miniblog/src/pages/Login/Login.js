import styles from './Login.module.css'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useState, useEffect } from 'react'

export function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { createUser, error: authError, loading } = useAuthentication()

    async function handleSubmit(e) {
        e.preventDefault()

        setError('')
        const user = {
            email,
            password
        }

        const res = await createUser(user)

        console.log(res)
    }

    useEffect(() => {

        if (authError) {
            setError(authError)
        }

    }, [authError])

    return (
        <>
            <div className={styles.login}>
                <h1>Entrar</h1>
                <p>Faça o login para poder utilizar o sistema</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Email:</span>
                        <input type="email" name='email' placeholder='E-mail do usuário'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </label>
                    <label>
                        <span>Senha:</span>
                        <input type="password" name='password' placeholder='Insira sua senha'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}>
                        </input>
                    </label>
                    {!loading && <button className='btn'>Entrar</button>}
                    {loading && <button className='btn' disabled>Aguarde...</button>}
                    {error && <p className='error'>{error}</p>}
                </form>
            </div>
        </>
    )
}