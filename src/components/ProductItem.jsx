import { getImage } from "../utils/getImage";

export default function ProductItem({ product }) {
    let imgLink = getImage(`../assets/images/${product.image}`);

    return (
        <div className="col-span-4 shadow border rounded overflow-hidden">
            <img src={imgLink} alt="abcd" />
            <div className="p-3">
                <h4 className="text-2xl">{product.title}</h4>
                <p className="text-slate-400">{product.category}</p>
                <div className="flex justify-between items-center mt-3">
                    <span className="text-xl font-semibold">
                        ${product.price}
                    </span>
                    <span className="text-yellow-500">{product.ratting}</span>
                </div>
            </div>

            <a
                href="#"
                className="block bg-green-600 text-white text-center text-xl font-semibold py-3"
            >
                Read More
            </a>
        </div>
    );
}
