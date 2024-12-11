import CatalogBlock from './catalog/Products'
import styles from './Catalog.module.css'

function Catalog() {

    return (
        <div className={styles.contents}>
            <CatalogBlock />
            <CatalogBlock />
            <CatalogBlock />
            <CatalogBlock />
            <CatalogBlock />
            <CatalogBlock />
            <CatalogBlock />
            <CatalogBlock />
            <CatalogBlock />
            <CatalogBlock />
            <CatalogBlock />
            <CatalogBlock />
        </div>
    )
}

export default Catalog