import Logo from '../../../assets/logo.svg'
import Cart from '../../../assets/cart.svg'
import styles from './Navbar.module.css'
import { useState } from 'react'
import CartModal from '../CartModal/CartModal'
import useCartContext from '../../../hooks/useCartContext'
import { useLocation, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const [showCartModal, setShowCartModal] = useState(false);

    const {state:{cartItems}} = useCartContext()

    //Hook para leer la ruta para ocultar info según la ruta
    const location = useLocation()
    console.log(location);
    
    const handleShowCartModal = () =>{
        setShowCartModal(!showCartModal)
    }
    const navigate = useNavigate();

    const handleNavigateToHome = () =>{
        navigate("/")

    }
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarDetail} onClick={handleNavigateToHome}>
        <img src={Logo} alt="Logo de Ecommerce" width={50} height={50}/>
        <div>
            <span>DH Ecommerce</span>
        </div>
      </div>
      {/* Mostramos la info SOLO si es DIFERENTE a checkout */}
      {location.pathname !== '/checkout' &&(
        <>
          <div className={styles.navbarCartContainer}>
          <p className={styles.navbarTextAmount}>{cartItems.length === 0 ? null : cartItems.length}</p>
          <img src={Cart} alt="Cart" onClick={handleShowCartModal}/>
        </div>
        {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal}/>)}
        </>
      )}
      
    </div>
  )
}
