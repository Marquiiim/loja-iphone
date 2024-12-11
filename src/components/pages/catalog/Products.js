import styles from './Products.module.css'

import { SlArrowDown } from 'react-icons/sl'
import { SlArrowUp } from 'react-icons/sl'
import Iphone from '../../../img/BlackiPhone.png'

function CatalogStructure() {

    return (
        <div className={styles.container_block}>
            <div className={styles.content_block}>
                <img src={Iphone} alt='Iphone' />
                <button className={styles.buy_button}>Comprar</button>
                <span className={styles.more_informations}>Mais informações <SlArrowDown size='10' /></span>
            </div>
        </div>
    )
}

export default CatalogStructure