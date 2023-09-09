//hooks
import { Link, NavLink } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication'
//CSS
import styles from './NavBar.module.css'
//context
import { useAuthValue } from '../context/AuthContext'

export default function Navbar() {

    const { user } = useAuthValue()
    const { logout } = useAuthentication()

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.brand}>
                Mini <span>Blog</span>
            </Link>
            <ul className={styles.links_list}>
                <li >
                    <NavLink to="/">Home</NavLink>
                </li>
                {!user && (
                    <>
                        <li >
                            <NavLink to="/login">Entrar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Cadastrar</NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li >
                            <NavLink to="/posts/create">Novo post</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink to="/about">Sobre</NavLink>
                </li>
                {user && (
                    <li>
                        <a onClick={logout}>Sair</a>
                    </li>
                )}
            </ul>
        </nav>
    )
}