//route.ts

import { getAllProducts, createProduct } from "@/app/products/[id]/DataSource";
import { products } from "./data";

//TS es TypeScript: JavaScript 
// --> POO
//Vamos a implementar el recurso products: CRUD - API REST

//declarar el tipo Products con interface o con type

//endpoints
//enpoint: una ruta para acceder a un recurso, se define por un tipo de petición
//GET, POST, PUT, PATCH, DELETE

//endpoint para listar todos los productos

//ejemplo del primer endpoint
//retorna un JSON con la lista de productos

//localhost:3000/api/products
export async function GET() {
    const products = await getAllProducts();

    return Response.json(
        products
    );
}

//endpoint para agregar un producto
//POST
export async function POST(request: Request) {
    //Leer la información del producto que viene en el request
    //Leer el body
    const body = await request.json();

    console.log(body);

    //Validar la información

    //agregarlo a la lista de productos
    //Primero asignar un ID

    //Crear el producto en Supabase
    const newProduct = await createProduct(body);

    //los ... es el spread operator

    //Agregar el producto al array products, al final
    //Ahora el producto se agrega en Supabase

    //responder que se agregó el producto
    return Response.json(
        {
            status: "Success",
            message: "Producto agregado",
            product: newProduct,
            //devolver el producto agregado
        }
    );
}