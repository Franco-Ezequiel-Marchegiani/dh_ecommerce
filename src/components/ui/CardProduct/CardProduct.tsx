import styles from './CardProduct.module.css'
const CardProduct = (props) => {
    
    const {product} = props

  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={product.image} alt={product.name} />
      <div className={styles.cardDetail}>
            <h3 className={styles.cardTitle}>{product.name}</h3>
            <div className={styles.cardBody}>
                <p className={styles.cardType}>{product.type}</p>
                <p className={styles.cardPrice}>Price, <small>{product.price}</small></p>
            </div>
            <button className={styles.cardButton}>Add to cart</button>
      </div>
      
    </div>
  )
}

export default CardProduct
