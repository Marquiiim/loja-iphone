import styles from './Footer.module.css'

import { ImInstagram } from 'react-icons/im'

function Footer() {

    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_content}>
                <ul>
                    <li>
                        Rua das Conexões, 123
                        Bairro Tecnologia, Cidade Nova
                    </li>
                    <li>
                        <span>
                            <ImInstagram className={styles.icon_instagram} /> Instagram:
                            @marquim.celulares
                        </span>
                    </li>
                    <li>
                        Segunda a Sexta: 9h às 18h
                        Sábados: 9h às 14h
                        Domingos e feriados: Fechado
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer