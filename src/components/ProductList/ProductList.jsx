import { Product } from '../Product/Product'
import styles from '../ProductList/ProductList.module.css'
import { webs } from '../../img/imagenes'

export function ProductList() {
    return (
        <div className={styles.p1}>
            <div className={styles.p1Text}>
                <h1 className={styles.p1Title}>Crear e Inspirar</h1>
                <p className={styles.p1Desc}>Lama is a creative portfolio that your work has been waiting Beautiful homes, stunning portfolio styles & a whole los more inside</p>
            </div>
            <div className={styles.p1List}>
                {webs.map((items) =>{
                    return <Product key={items.id} img={items.web} link={items.link}/>
                })}
                

            </div>
        </div>
    )
}
