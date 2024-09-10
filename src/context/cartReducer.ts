export const initialState = {
    cartItems: []
}

//Ej estructura action
/* action:{
    type: "Add" //"Remove"
    payload: product
} */
export const cartReducer = (state, action) =>{
    switch (action.type) {
        case "ADD_TO_CART": {
            
            const {id} = action.payload

            //Valida si el item ya se encuentra en el carrito, true o false
            const existingItem = state.cartItems.find((item) => item.id === id)
            
            if (existingItem) {
                return{
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === id ? {...existingItem, quantity: existingItem.quantity + 1} : item)
                }
            }else{
                return{
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
    
        }
        case "REMOVE_FROM_CART":{
            const {id: removeItemID} = action.payload

            //Validamos si el item ya existe en el carrito
            const itemToRemove = state.cartItems.find((item) => item.id === removeItemID)

            if (itemToRemove.quantity === 1) {
                return{
                    ...state,
                    //Filtra y trae aquellos que el ID sean distintos a los que el usuario removió y tienen cantidad 1
                    cartItems: state.cartItems.filter((item) => item.id !== removeItemID)
                }
            } else {
                return{
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === removeItemID ? {...itemToRemove, quantity: itemToRemove.quantity - 1} : item)
                }
            }
        }

        //Crear otro caso para vaciar el carrito por completo

        default:
            return state;
            
    }
}