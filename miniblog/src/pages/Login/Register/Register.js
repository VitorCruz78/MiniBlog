import styles from './Register.module.css'

import { useState, useEffect } from 'react'

export function Register() {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        setError('')
        const user = {
            displayName,
            email,
            password
        }

        if (password != confirmPassword) {
            setError("As senhas precisam ser iguais!")
            return
        }

        console.log(user)
    }

    return (
        <>
            <div className={styles.register}>
                <h1>Cadastre-se para postar</h1>
                <p>Crie o seu usuário e compartilhe suas histórias</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Nome:</span>
                        <input type="text" name='displayName' placeholder='Nome do usuário'
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}>
                        </input>
                    </label>
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
                    <label>
                        <span>Confirmação de senha:</span>
                        <input type="password" name='confirmPassword' placeholder='Confirme a sua senha'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}>
                        </input>
                        <button className='btn'>Cadastrar</button>
                        {error && <p className='error'>{error}</p>}
                    </label>
                </form>
            </div>
        </>
    )
}