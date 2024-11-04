import { useReducer, useState } from "react";
import { initialBookData } from "./data/initialBookData"
import GalleryItem from "./GalleryItem"
import CartReducer from "./reducer/CartReducer";
import BookGallery from "./BookGallery";
import { CartContext } from "./cntext/CartContext";
import First from "./First";


function App() {
  const books = initialBookData();

  const [cartItems, dispatch] = useReducer(CartReducer, []);

  const handleDelete = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    })
  }

  const privideObject = {
    dispatch
  }

  return (

    <CartContext.Provider value={privideObject}>
      <div className="flex flex-wrap">
        <First />
        <BookGallery books={books} />

        <div>
          <h1>My Cart</h1>

          <ul>
            <li>
              {cartItems.map(cart => (
                <div className="mb-3" key={cart.id}>
                  <h2 className="font-bold">{cart.name}</h2>
                  <p>{cart.price}</p>
                  <button onClick={() => handleDelete(cart.id)} className="bg-rose-500 text-white p-2">Delete</button>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </CartContext.Provider>


  )
}





export default App
