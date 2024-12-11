import styles from './Products.module.css'

import { useRef, useState } from 'react';

import { VscCheckAll } from "react-icons/vsc";
import Iphone from '../../../img/BlackiPhone.png'

function CatalogStructure() {

    const [isButtonVisible, setIsButtonVisible] = useState(false)

    const handleMouseEnter = () => {
        setIsButtonVisible(true)
    }
    const handleMouseOut = () => {
        setIsButtonVisible(false)
    }

    return (
        <div className={styles.container_block} onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
            <div className={styles.content_block}>
                <img src={Iphone} alt='Iphone' />
                <h2>
                    APPLE IPHONE 15 PRETO
                </h2>
                <span className={styles.price_buy}>
                    R$ 5.349,00 no PIX
                    Você economiza: -R$ 2.750,00 (-34%)
                    ou 12x de R$ 495,28
                </span>
                <button className={`${styles.buy_button} ${isButtonVisible ? styles.visible : ''}`}>
                    Comprar agora <span><VscCheckAll /></span>
                </button>
            </div>
        </div>
    )
}

export default CatalogStructure