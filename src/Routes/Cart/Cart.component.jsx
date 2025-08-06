import { useEffect, useState } from "react";
import Products from "../../Components/Products/Products.component";
import { displayCart,auth } from "../../Utility/Firebase/Firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";


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
    <Products products={Cart} />
  )
}

export default Cart;