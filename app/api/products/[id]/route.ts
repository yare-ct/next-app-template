//app/api/products/[id]/route.ts
// el parametro se llama id

import {
    getProductByID,
    updateProduct,
    deleteProduct
} from "@/app/products/[id]/DataSource";

// lista de productos
// para poder actualizar / eliminar
// ahora los productos se obtienen desde Supabase


// tipo para estructura de parametro
interface Routeparams {
    params: Promise<{
        //promesa: promise--> se espera algo:
        //para nuestro caso se espera que venga un ID (cumplida)
        id: string,
    }>
}

// endpoint para leer
// producto por ID
export async function GET(
    request: Request,
    { params }: Routeparams
) {

    // leer id desde params
    const { id } = await params;

    // si no se recibe ID
    if (!id) {

        //retornar status 400
        return Response.json({
            error: true,
            message: "URL incorrecta"
        }, {
            status: 400,
        });
    }


    // buscar el producto por ID
    // ahora se busca en Supabase
    const product = await getProductByID(Number(id));


    //si el producto no existe
    //retornar statusHTTP 404
    if (!product) {
        return Response.json({
            error: true,
            message: "producto no existe"
        }, {
            status: 404,
        });
    }


    // retornar el producto encontrado
    return Response.json(product);
}


// Actualizar un producto
// PUT api/products/:id
export async function PUT(
    request: Request,
    { params }: Routeparams
) {

    // leer el id
    const { id } = await params;

    //leer el body
    const body = await request.json();


    // buscar el producto por su id
    const product = await getProductByID(Number(id));


    // si no existe, retornar 404
    if (!product) {
        return Response.json({
            error: true,
            message: "producto no existe"
        }, {
            status: 404,
        });
    }


    // actualizar el producto en Supabase
    // con la información recibida en el body
    const updatedProduct = await updateProduct(
        Number(id),
        body
    );


    //retornar respuesta
    return Response.json(
        {
            status: "success",
            message: "producto actualizado",
            product: updatedProduct,
            //devolver el producto actualizado
        }
    );
}


// eliminar un producto por id
export async function DELETE(
    request: Request,
    { params }: Routeparams
) {

    //leer el id
    const { id } = await params;


    //buscar el producto por su id
    const product = await getProductByID(Number(id));


    // si el producto no existe
    if (!product) {
        return Response.json({
            error: true,
            message: "producto no existe"
        }, {
            status: 404,
        });
    }


    // eliminar un producto de Supabase
    await deleteProduct(Number(id));


    //retornar respuesta
    return Response.json({
        status: "success",
        message: "producto eliminado",
        product: product,
    });
}