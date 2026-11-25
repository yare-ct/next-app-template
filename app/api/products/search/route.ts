// importar los productos
import { searchProducts } from "@/app/products/[id]/DataSource";

//normalizar los nombres de los productos no haya espacios, acentos acentos comas etc
const normalizar = (coincidencia: string) =>
    coincidencia.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

export async function GET(
    request: Request
) {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("q") ?? "";

    console.log("product: ", search)

    if (!search.trim()) {
        return Response.json(
            { error: "Falta el parametro 'q' " },
            { status: 400 }
        );
    }

    const term = normalizar(search);

    const results = await searchProducts(term);

    return Response.json({ total: results.length, results });
}