import Cards from "react-credit-cards-2";
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import styles from './CardCredit.module.css'
import { useState } from "react";
import { toast } from "sonner";
import useCartContext from "../../../hooks/useCartContext";
import { CartProduct } from "../../../interface";

export const CardCredit = () => {

    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focused: ''
    })
    //Usamos el hook que creamos, que consta de alcanzar el contexto de cartContext, con el dispatch con las funciones para ejecutar
    const {dispatch} = useCartContext()
    const {number, name, expiry, cvc, focused} = cardData

    //Con "React.ChangeEvent<HTMLInputElement" se accede al DOM del input para obtener los valores puestos por el usuario
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target);
        
        //Matchea por el valor que tenga en el "name" del input, y asigna el valor
        setCardData({
            ...cardData,
            [e.target.name]: e.target.value
        })
    }

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) =>{
        console.log(e.target);
        setCardData({
            ...cardData,
            focused: e.target.name
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        //Validar que los campos no estén vacíos, y que sean correctos

        //Le pasamos un array con las variables, para que revise si c/u de ellas está vacía
        //Y utilizamos "includes" para que, si coincide con '', entonces está vacío
        if ([number, name, expiry, cvc].includes('')) {
            toast.error("All fields are required")
            //Mostrar mensaje de error
            return
        }
        
        //Limpiar el estado
        setCardData({
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focused: ''
        })

        //Definimos un nuevo caso, una nueva función, definimos el TYPE con la función que se va a ejecutar
        //Seguido del payload (en este caso un objeto vacío), pero utilizamos "as" de TypeScript para definir la estructura del objeto
        dispatch({type:"CLEAR_CART", payload: {} as CartProduct})
        toast.success("Congrats! You made the buy")

    }
  return(
    <div className={styles.container}>
        <div>
            <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused as any}/>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={styles.formControl}>
                <label htmlFor="number">Card Number</label>
                <input 
                    type="text" 
                    name="number" 
                    id="number"
                    value={number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}/>
            </div>
            <div className={styles.formControl}>
                <label htmlFor="name">Card Name</label>
                <input 
                    type="text"
                    name="name" 
                    id="name"
                    value={name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}/>
            </div>
        

            {/* AÑADIR VALIDACIONES! */}

            {/* Grupo */}
            <div className={styles.formInputGrup}>
                <div className={styles.formControl}>
                    <label htmlFor="expiry">Card Expiry</label>
                    <input 
                        type="text"
                        name="expiry" 
                        id="expiry"
                        value={expiry}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="cvc">Card CVC</label>
                    <input 
                        type="text"
                        name="cvc" 
                        id="cvc"
                        value={cvc}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}/>
                </div>
            </div>
            <button type="submit" className={styles.buyButton}>Buy now</button>
        </form>
    </div>
  );
};
