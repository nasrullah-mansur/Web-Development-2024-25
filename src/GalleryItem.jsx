import { useContext } from "react";
import { getImage } from "./utils/getImage";
import { CartContext } from "./cntext/CartContext";


export default function GalleryItem({ gallery }) {

    const { dispatch } = useContext(CartContext);

    const handleAddToCart = () => {

        dispatch({
            type: "ADD_TO_CART",
            payload: gallery
        });

    }


    return (
        <div className="w-2/12 mb-3">
            <img className="w-full h-[200px] object-cover" src={getImage(`../assets/book_images/${gallery.image}`)} alt="" />
            <p>{gallery.price}</p>
            <button onClick={handleAddToCart} className="bg-gray-800 text-white p-2">Add To Cart</button>
        </div>
    )
}
