//en este archivo implementar
//la conexión con supabase (server e implementar CRUD + buscar)

import { product } from "@/app/api/products/data";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

/**
 *
 * @returns product[]
 */

//OBTENER TODOS LOS PRODUCTOS
export async function getAllProducts(): Promise<product[]> {
    const cookieStore = await cookies();

    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
        .from("Products")
        .select("*");

    if (error) {
        throw new Error(`Error al obtener productos: ${error.message}`);
    }

    return data as product[];
}


//OBTENER UN PRODUCTO POR ID
export async function getProductByID(
    id: number
): Promise<product | null> {

    //crear cliente de supabase
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    //hacer el query
    const { data, error } = await supabase
        .from("Products")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        return null;
    }

    //retornar data como product
    return data as product;
}


//CREAR UN PRODUCTO
export async function createProduct(
    productData: Omit<product, "id">
): Promise<product> {

    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
        .from("Products")
        .insert(productData)
        .select("*")
        .single();

    if (error) {
        throw new Error(`Error al crear producto: ${error.message}`);
    }

    return data as product;
}


//ACTUALIZAR UN PRODUCTO
export async function updateProduct(
    id: number,
    productData: Partial<Omit<product, "id">>
): Promise<product> {

    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
        .from("Products")
        .update(productData)
        .eq("id", id)
        .select("*")
        .single();

    if (error) {
        throw new Error(`Error al actualizar producto: ${error.message}`);
    }

    return data as product;
}


//ELIMINAR UN PRODUCTO
export async function deleteProduct(
    id: number
): Promise<void> {

    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase
        .from("Products")
        .delete()
        .eq("id", id);

    if (error) {
        throw new Error(`Error al eliminar producto: ${error.message}`);
    }
}
//BUSCAR PRODUCTOS
export async function searchProducts(
    query: string
): Promise<product[]> {

    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
        .from("Products")
        .select("*")
        .or(`name.ilike.%${query}%,brand.ilike.%${query}%`);

    if (error) {
        throw new Error(`Error al buscar productos: ${error.message}`);
    }

    return data as product[];
}