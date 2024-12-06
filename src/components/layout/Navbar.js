import { Link } from 'react-router-dom'

import styles from './Navbar.module.scss'

function Navbar() {

    return (
        <nav className={styles.navbar}>

            <div className={styles.logo}>
                <Link to='/'>
                    <span>
                        Marquim
                    </span>
                </Link>
            </div>

            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/'>
                        Inicio
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to='/catalog'>
                        Catálogo
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to='/contact'>
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar