import { getProducts } from "@/services/products-service";
import ProductCard from "../productCard";

export default async function Home() {
  // Leer la lista de productos (se ejecuta del lado del servidor)
  const productsData = await getProducts();
  console.log(productsData);

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <h1 className="text-3xl font-bold">Productos populares</h1>

      <div className="flex flex-wrap gap-4 justify-center">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}