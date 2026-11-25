
import { products } from "@/app/api/products/data";
import { ProductForm } from "../../components/ProductForm";
import { getProductByID } from "@/services/products-service";
import { notFound } from "next/navigation";

export default async function EditProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    // El id viene de la URL: /dashboard/products/5/edit -> id = "5" con ese id genera una nueva ruta o enlace
    const { id } = await params;

    try {
        const product = await getProductByID(Number(id));

        return (
            <main>
                <h2>Editar producto</h2>
                //manda a llamar los productos
                <ProductForm product={product} />
            </main>
        );
    } catch {
        // Si el producto no existe, muestra la página 404
        notFound();
    }
}