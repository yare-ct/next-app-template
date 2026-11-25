import { product } from "@/app/api/products/data"
import { ProductForm } from "../components/ProductForm"


export default function NewProduct() {
    //Datos de inicio para el nuevo producto
    const product: product = {
        id: 0,
        name: "",
        description: "",
        brand: "",
        cover: "",
        images: [],
        rating: 0,
        currency: "MXN",
        stock: 0,
        price: 0
    }

    return (
        <ProductForm
        product={product}
        />
    )
}