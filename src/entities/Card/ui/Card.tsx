import { infoDB } from "../types";
import styles from './Card.module.scss'
function Card(product: infoDB) {
    return (
        <>

<a href="#" className={styles.a}>
    <h5 className={styles.h5}>{product.head}</h5>
    <p className={styles.p}>{product.text}</p>
</a>

        </>
    );
}

export default Card;
