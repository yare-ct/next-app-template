import ProductCard from "@/app/productCard";
import { searchProduct } from "@/services/products-service";

/**
 * se recibe el query de busqueda
ysemanda a buscar en el backend
/products/search/computadora
 */
export default async function SearchProductsPage({
  params,
}: {
  params: Promise<{ q: string }>
}) {
  //leer el criterio
  const { q } = await params;

  console.log("Buscando:", q)

  //buscar backend
  const products = await searchProduct(q);

  // si no hay resultados,
  //informarlo
  if (!products?.length) {
    return (
      <div>
        <p>No se encontraron productos para: {q}</p>
      </div>
    );

  }

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <h1 className="text-3xl font-bold">Resultados de busquedad</h1>

      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

}



