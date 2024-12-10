import styles from './Products.module.css'
import Iphone from '../../img/BlackiPhone.png'

function CatalogStructure() {

    return (
        <div className={styles.container_block}>
            <div className={styles.content_block}>
                <img src={Iphone} alt='Iphone' />
                <button>Comprar</button>
            </div>
        </div>
    )
}

export default CatalogStructure