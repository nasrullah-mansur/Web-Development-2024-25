export default function CartReducer(carts, action) {
    const {type, payload} = action;

    switch (type) {
        case "ADD_TO_CART": {
            return [
                ...carts,
                {
                    id: payload.id,
                    name: payload.name,
                    author: payload.author,
                    image: payload.image,
                    price: payload.price,
                    quantity: 1,
                }
            ]
        }
       

        case "REMOVE_FROM_CART": {
            return (carts.filter(item => item.id !== payload));
        }
        
    }
}