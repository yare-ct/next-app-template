//services/products-service.ts

import { product } from "@/app/api/products/data";



//Implementar las funciones para consumir los endpoints de api/products

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api/";
/**
 * Armar la ruta completa para los endpoints
 * @param path endpoint del API
 * @returns path completo
 */

function getApiUrl(path: string): string {
    if (!API_BASE_URL) {
        throw new Error("Falta ruta base de la API");
    }

    return `${API_BASE_URL.replace(/\/$/, "")}${path}`;
}

/**
 * Cosumir el endpoint GET: /products
 * @returns
 */
export async function getProducts(): Promise<product[]> {
    const response = await fetch(getApiUrl("/products"), {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(
            `Error al obtener productos: ${response.status}`
        )
    }

    //Retornar array con la lista de productos
    return (await response.json()) as product[];
}

//Función para leer un producto por ID desde el backend
export async function getProductByID(id: number): Promise<product> {
    //localhost:3000/api/products/:id
    const response = await fetch(getApiUrl(`/products/${id}`), {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(
            `Error al obtener el producto: ${response.status}`
        )
    }

    //Retornar array con la lista de productos
    return (await response.json()) as product;
}

//Función para buscar por criterio
export async function searchProduct(query:string): Promise<product[]> {
    const response = await fetch(getApiUrl(`/products/search?q=${query}`), {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(
            `Error buscar productos: ${response.status}`
        )
    }

    //Retornar array con la lista de productos
    return (await response.json()) as product[];
}

export async function saveProduct(product:product): Promise<product> {
    const response = await fetch(getApiUrl("/products"), {
        method: "POST",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product),
    });
    
    if(!response.ok) {
        throw new Error (`Error al guardar el producto: ${response.status}`);
    }

    //Retornar producto guardado
    return (await response.json()) as product;
}

// Función para actualizar un producto existente
export async function updateProduct(
    id: number,
    product: Partial<Omit<product, "id">>
): Promise<product> {
    // localhost:3000/api/products/:id
    const response = await fetch(getApiUrl(`/products/${id}`), {
        method: "PUT",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        throw new Error(`Error al actualizar el producto: ${response.status}`);
    }

    // Retornar producto actualizado
    return (await response.json()) as product;
}