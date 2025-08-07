import { useEffect, useState } from "react";
import { displayCart,auth } from "../../Utility/Firebase/Firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

import CartProducts from "../../Components/CartProducts/CartProducts.component";

const Cart = () => {

  const [user] = useAuthState(auth);
  const [Cart, setCart] = useState([]);

  useEffect(()=>{
    const getCart = async () => {
      const response = await displayCart(user);
      setCart(response);
    }
    getCart();
  },[user])

  return(
    <>
      {Cart.length>0 ? <CartProducts products={Cart} /> : <p style={{textAlign: 'center'}}>NO ITEM(S) IN CART</p>}
    </>
  )
}

export default Cart;