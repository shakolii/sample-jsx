type Product = {
    id: number
    name: string
    price: number
    category: string
    emoji: string
}

type ProductCardProp = {
    product: Product
}

function ProductCard({ product }: ProductCardProp) {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hoever-lg transition">
            <div className="text-5xl mb-3">{product.emoji}</div>
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{product.category}</p>
            <p className="text-lg font-bold">{product.price.toLocaleString()}</p>

        </div>
    )
}

export default ProductCard