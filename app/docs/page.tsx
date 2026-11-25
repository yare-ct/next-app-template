import { title } from "@/components/primitives";
import { getProductByID } from "@/services/products-service";
import { Button, Card } from "@heroui/react";
import { notFound } from "next/navigation";

export default async function DocsPage({
  params,
}: {
  params: Promise<{id : string}>
}) {

  //Leer el parámetro: id
  const {id} = await params;
  //{id} se le llama: destructuración
  console.log("ID", id)
  const productID = Number(id);
  
  if (!productID) {
    return notFound();
  }
  //consumir el id
  const product = await getProductByID(productID);


  return (
    <div className="p-4">
      <div className="w-24 h-8 bg-blue-500 text-center border-2 border-white rounded-xl flex items-center justify-center mb-4">
        <a href="/" className="text-white text-sm font-medium">Volver</a>
      </div>

      <Card className="w-full h-auto md:flex-row p-4 gap-6">

        <div className="flex flex-col object-cover">
          <div className="rounded-2xl bg-gray-100">
            <img
              className="h-full w-full object-cover"
              src={product.cover}
            />
          </div>

          <div className="mt-3 flex gap-2.5 overflow-x-auto">
            <img
              className="w-28 h-28 rounded-xl object-cover"
              src={product.images[0]}
              alt={product.name}
            />
            <img
              className="w-28 h-28 rounded-xl object-cover"
              src={product.images[2]}
              alt={product.name}
            />
            <img
              className="w-28 h-28 rounded-xl object-cover"
              src={product.images[3]}
              alt={product.name}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1 flex flex-col items-start p-0">
            <Card.Title className="pe-8 text-4xl text-white font-bold leading-10">{product.name}</Card.Title>
            <p className="mt-2">⭐{product.rating} 4627 Unidades vendidas</p>
            <p className="text-green-500 font-bold text-xl mt-2">${product.price} {product.currency}</p>
            <p className="mt-2 text-gray-300">{product.brand}</p>
            <Card.Description className="mt-2 text-gray-300">
              {product.description}
            </Card.Description>

            <h1 className="text-xl mt-4 font-semibold">Cantidad</h1>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-800 text-center border-white border-1 rounded-sm flex items-center justify-center">
                <p className="text-white font-bold">1</p>
              </div>
              <span className="text-sm">Stock: {product.stock}</span>
            </div>
          </Card.Header>

          <Card.Footer className="flex w-full flex-col items-start sm:flex-row sm:items-center p-0 mt-4 gap-2">
            <Button className="w-full sm:w-auto">Comprar</Button>
            <Button className="w-full sm:w-auto bg-gray-700">Agregar al carrito</Button>
          </Card.Footer>
        </div>

      </Card>
    </div>
  );}