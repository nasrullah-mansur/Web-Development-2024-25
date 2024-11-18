import ProductItem from "./ProductItem";

export default function ProductList() {
    const products = [
        {
            id: "1",
            title: "Elegant Queen Bed",
            image: "b-1.jpg",
            description:
                "This bed offers a perfect blend of style and comfort, featuring a durable frame and luxurious design. It complements any decor while ensuring lasting durability. A great choice for a cozy retreat.",
            price: 52.5,
            ratting: 3.5,
            category: "bed",
        },
        {
            id: "2",
            title: "Comfort King Bed",
            image: "b-2.jpg",
            description:
                "This bed offers a perfect blend of style and comfort, featuring a durable frame and luxurious design. It complements any decor while ensuring lasting durability. A great choice for a cozy retreat.",
            price: 105,
            ratting: 3.8,
            category: "bed",
        },
        {
            id: "3",
            title: "Stylish Single Bed",
            image: "b-3.jpg",
            description:
                "This bed offers a perfect blend of style and comfort, featuring a durable frame and luxurious design. It complements any decor while ensuring lasting durability. A great choice for a cozy retreat.",
            price: 157.5,
            ratting: 4.1,
            category: "bed",
        },
        {
            id: "4",
            title: "Modern Bed Frame",
            image: "b-4.jpg",
            description:
                "This bed offers a perfect blend of style and comfort, featuring a durable frame and luxurious design. It complements any decor while ensuring lasting durability. A great choice for a cozy retreat.",
            price: 210,
            ratting: 4.4,
            category: "bed",
        },
        {
            id: "5",
            title: "Luxury Upholstered Bed",
            image: "b-5.jpg",
            description:
                "This bed offers a perfect blend of style and comfort, featuring a durable frame and luxurious design. It complements any decor while ensuring lasting durability. A great choice for a cozy retreat.",
            price: 262.5,
            ratting: 4.7,
            category: "bed",
        },
        {
            id: "6",
            title: "Modern Pendant Light",
            image: "l-1.jpg",
            description:
                "Illuminate your home with this stylish and energy-efficient light. Crafted with high-quality materials, it provides a warm ambiance and is perfect for any modern interior.",
            price: 65,
            ratting: 3.5,
            category: "light",
        },
        {
            id: "7",
            title: "Chandelier Light",
            image: "l-2.jpg",
            description:
                "Illuminate your home with this stylish and energy-efficient light. Crafted with high-quality materials, it provides a warm ambiance and is perfect for any modern interior.",
            price: 117.5,
            ratting: 3.8,
            category: "light",
        },
        {
            id: "8",
            title: "Adjustable Desk Lamp",
            image: "l-3.jpg",
            description:
                "Illuminate your home with this stylish and energy-efficient light. Crafted with high-quality materials, it provides a warm ambiance and is perfect for any modern interior.",
            price: 170,
            ratting: 4.1,
            category: "light",
        },
        {
            id: "9",
            title: "LED Floor Lamp",
            image: "l-4.jpg",
            description:
                "Illuminate your home with this stylish and energy-efficient light. Crafted with high-quality materials, it provides a warm ambiance and is perfect for any modern interior.",
            price: 222.5,
            ratting: 4.4,
            category: "light",
        },
        {
            id: "10",
            title: "Vintage Wall Light",
            image: "l-5.jpg",
            description:
                "Illuminate your home with this stylish and energy-efficient light. Crafted with high-quality materials, it provides a warm ambiance and is perfect for any modern interior.",
            price: 275,
            ratting: 4.7,
            category: "light",
        },
        {
            id: "11",
            title: "Classic Wall Clock",
            image: "c-1.jpg",
            description:
                "This wall clock combines functionality with style. Featuring a timeless design and precise quartz movement, it makes a perfect addition to any room in your home.",
            price: 77.5,
            ratting: 3.5,
            category: "wall clock",
        },
        {
            id: "12",
            title: "Retro Wall Clock",
            image: "c-2.jpg",
            description:
                "This wall clock combines functionality with style. Featuring a timeless design and precise quartz movement, it makes a perfect addition to any room in your home.",
            price: 130,
            ratting: 3.8,
            category: "wall clock",
        },
        {
            id: "13",
            title: "Minimalist Wall Clock",
            image: "c-3.jpg",
            description:
                "This wall clock combines functionality with style. Featuring a timeless design and precise quartz movement, it makes a perfect addition to any room in your home.",
            price: 182.5,
            ratting: 4.1,
            category: "wall clock",
        },
        {
            id: "14",
            title: "Antique Wall Clock",
            image: "c-4.jpg",
            description:
                "This wall clock combines functionality with style. Featuring a timeless design and precise quartz movement, it makes a perfect addition to any room in your home.",
            price: 235,
            ratting: 4.4,
            category: "wall clock",
        },
        {
            id: "15",
            title: "Rustic Wall Clock",
            image: "c-5.jpg",
            description:
                "This wall clock combines functionality with style. Featuring a timeless design and precise quartz movement, it makes a perfect addition to any room in your home.",
            price: 287.5,
            ratting: 4.7,
            category: "wall clock",
        },
        {
            id: "16",
            title: "Vintage Mirror with Frame",
            image: "m-1.jpg",
            description:
                "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
            price: 90,
            ratting: 3.5,
            category: "mirror",
        },
        {
            id: "17",
            title: "Oval Vanity Mirror",
            image: "m-2.jpg",
            description:
                "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
            price: 142.5,
            ratting: 3.8,
            category: "mirror",
        },
        {
            id: "18",
            title: "Round Frameless Mirror",
            image: "m-3.jpg",
            description:
                "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
            price: 195,
            ratting: 4.1,
            category: "mirror",
        },
        {
            id: "19",
            title: "Wall Mounted Mirror",
            image: "m-4.jpg",
            description:
                "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
            price: 247.5,
            ratting: 4.4,
            category: "mirror",
        },
        {
            id: "20",
            title: "Full-Length Mirror",
            image: "m-5.jpg",
            description:
                "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
            price: 300,
            ratting: 4.7,
            category: "mirror",
        },
        {
            id: "21",
            title: "Decorative Mirror",
            image: "m-6.jpg",
            description:
                "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
            price: 352.5,
            ratting: 3.5,
            category: "mirror",
        },
        {
            id: "22",
            title: "Bathroom Mirror",
            image: "m-7.jpg",
            description:
                "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
            price: 405,
            ratting: 3.8,
            category: "mirror",
        },
        {
            id: "23",
            title: "Standing Mirror",
            image: "m-8.jpg",
            description:
                "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
            price: 457.5,
            ratting: 4.1,
            category: "mirror",
        },
        {
            id: "24",
            title: "Beveled Edge Mirror",
            image: "m-9.jpg",
            description:
                "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
            price: 510,
            ratting: 4.4,
            category: "mirror",
        },
        {
            id: "25",
            title: "Gold Framed Mirror",
            image: "m-10.jpg",
            description:
                "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
            price: 562.5,
            ratting: 4.7,
            category: "mirror",
        },
        {
            id: "26",
            title: "Dining Table Set for Six",
            image: "t-1.jpg",
            description:
                "This dining table set combines durability and elegance, making it a perfect choice for family meals or gatherings. Its spacious design and sturdy construction ensure years of use.",
            price: 115,
            ratting: 3.5,
            category: "dining table",
        },
        {
            id: "27",
            title: "Wooden Dining Table Set",
            image: "t-2.jpg",
            description:
                "This dining table set combines durability and elegance, making it a perfect choice for family meals or gatherings. Its spacious design and sturdy construction ensure years of use.",
            price: 167.5,
            ratting: 3.8,
            category: "dining table",
        },
        {
            id: "28",
            title: "Glass Top Dining Table",
            image: "t-3.jpg",
            description:
                "This dining table set combines durability and elegance, making it a perfect choice for family meals or gatherings. Its spacious design and sturdy construction ensure years of use.",
            price: 220,
            ratting: 4.1,
            category: "dining table",
        },
        {
            id: "29",
            title: "Compact Dining Table",
            image: "t-4.jpg",
            description:
                "This dining table set combines durability and elegance, making it a perfect choice for family meals or gatherings. Its spacious design and sturdy construction ensure years of use.",
            price: 272.5,
            ratting: 4.4,
            category: "dining table",
        },
        {
            id: "30",
            title: "Extendable Dining Table",
            image: "t-5.jpg",
            description:
                "This dining table set combines durability and elegance, making it a perfect choice for family meals or gatherings. Its spacious design and sturdy construction ensure years of use.",
            price: 325,
            ratting: 4.7,
            category: "dining table",
        },
        {
            id: "948ae8ca-3b6f-4a08-860e-8e2cb6190a81",
            title: "Ut sed quis eum quib",
            image: "Vero in quia ullamco",
            description: "Ex itaque incidunt ",
            price: "698",
            ratting: "3",
            category: "DE",
            _token: "62753de8-5772-45f0-a239-1c1e78a96fde",
        },
        {
            id: "f31c4a56-f857-4f24-a1a4-b4ad1d3fb946",
            title: "Temporibus dolorum d",
            image: "Lorem delectus id q",
            description: "Nihil labore ut dolo",
            price: "983",
            ratting: "2",
            category: "US",
            _token: "62753de8-5772-45f0-a239-1c1e78a96fde",
        },
        {
            id: "3c4f4151-a1c9-49f2-912d-15bcfd221f41",
            title: "Reiciendis non cillu",
            image: "Harum aut esse est",
            description: "Atque pariatur In q",
            price: "388",
            ratting: "2",
            category: "light",
        },
        {
            id: "c3801b13-035a-43b1-a907-aae6c1ceed89",
            title: "Commodo duis autem a",
            image: "Tenetur ipsum elit",
            description: "Consectetur ipsa Na",
            price: "905",
            ratting: "0",
            category: "bed",
        },
        {
            id: "fe1b7c15-da77-4dd0-bb17-df7ea6bf0121",
            title: "Qui cupidatat ad off",
            image: "Neque vel voluptatem",
            description: "Maxime quasi ut vita",
            price: "818",
            ratting: "1",
            category: "bed",
        },
        {
            id: "b1820a7f-1b7c-4561-9c0b-6b39b0db2371",
            title: "Sunt reprehenderit o",
            image: "Aut nobis consectetu",
            description: "Quos animi nisi et ",
            price: "148",
            ratting: "2",
            category: "wall clock",
            status: "inactive",
            createdAt: "2024-11-16T13:54:14.970Z",
        },
    ];

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
