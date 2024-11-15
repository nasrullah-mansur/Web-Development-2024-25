import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
    return (
        <div className="col-span-9 bg-white p-3">
            <h2 className="text-3xl font-bold mb-5">Our Products</h2>

            <div className="grid grid-cols-12 gap-4">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
