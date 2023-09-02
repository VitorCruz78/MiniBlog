//hooks
import { Link, NavLink } from 'react-router-dom'
//CSS
import styles from './NavBar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.brand}>
                Mini <span>Blog</span>
            </Link>
            <ul className={styles.links_list}>
                <li >
                    <NavLink to="/">Home</NavLink>
                </li>
                <li >
                    <NavLink to="/login">Entrar</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Cadastrar</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Sobre</NavLink>
                </li>
            </ul>
        </nav>
    )
}