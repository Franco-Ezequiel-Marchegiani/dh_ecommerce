import styles from './CartModal.module.css'
import Close from '../../../assets/close.svg'
import { FC } from 'react'
import useCartContext from '../../../hooks/useCartContext'
import { CartProduct } from '../../../interface'

interface Props{
  handleShowCartModal: () => void
}

const CartModal: FC<Props> = (props) => {
    const {handleShowCartModal} = props

    const {state:{cartItems}, dispatch} = useCartContext() 

    const addCart = (item:CartProduct) =>{
      dispatch({type:"ADD_TO_CART", payload: item})
    }
    const removeCart = (item:CartProduct) =>{
      dispatch({type:"REMOVE_FROM_CART", payload: item})
    }
    console.log(cartItems);

    const totalPay = () =>{
      const total = cartItems.reduce((accumulator, item) =>{
        return accumulator + item.price * item.quantity
      }, 0)

      return total
    }
    
  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
        <img src={Close} alt="Close" />
      </button>
      <table className={styles.modalTable}>
        <thead>
            <tr>
                <th>Product</th>
                <th>Delete</th>
                <th>Quantity</th>
                <th>Add</th>
            </tr>
        </thead>
        <tbody>
            {cartItems.map((item) =>(
              <tr key={item.id}>
              <td><p>{item.name}</p></td>
              <td>
                  <button 
                  className={styles.modalButtonRemove}
                  onClick={() => removeCart(item)}
                  >-1</button>
              </td>
              <td><p>{item.quantity}</p></td>
              <td>
                  <button 
                  className={styles.modalButtonAdd}
                  onClick={() => addCart(item)}
                  >+1</button>
              </td>
          </tr>
            ))}
        </tbody>
      </table>
      <div className={styles.modalTotalContainer}>
        <h3>{totalPay()}</h3>
      </div>
      <div className={styles.modalButtonContainer}>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default CartModal
