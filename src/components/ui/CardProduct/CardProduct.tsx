import { FC, useContext } from 'react'
import styles from './CardProduct.module.css'
import { CartContext } from '../../../context/CartContext';
import { CartProduct, Product } from '../../../interface';

interface Props{
  prodcut: Product
}



const CardProduct: FC<Props> = (props) => {
  const {product} = props

  const {dispatch} = useContext(CartContext)
  
  const item: CartProduct = {
    id: product.id,
    name: product.name,
    image: product.image,
    quantity: 1
  }

  const addToCart = (item: CartProduct) =>{
    console.log(item);
    
    dispatch({type: "ADD_TO_CART", payload: item})
  }
  
    

  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={product.image} alt={product.name} />
      <div className={styles.cardDetail}>
            <h3 className={styles.cardTitle}>{product.name}</h3>
            <div className={styles.cardBody}>
                <p className={styles.cardType}>{product.type}</p>
                <p className={styles.cardPrice}>Price, <small>{product.price}</small></p>
            </div>
            <button className={styles.cardButton} onClick={()=> addToCart(item)}>Add to cart</button>
      </div>
      
    </div>
  )
}

export default CardProduct
