//app/dashboard/products/page.tsx                                                                                                                                                              import { getProducts } from "@/services/products-service";
import { getProducts } from "@/services/products-service";
import { Table } from "@heroui/react";
import Link from "next/link";

export default async function ProductsPage() {

  const productsData = await getProducts();
  /**
   * Vista con todos los productos en forma de tabla
   */

  return (
    <main>
      <h2>Productos</h2>

<Link
  href="/dashboard/products/new"
  prefetch={false}
className="inline-block rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 mb-4"
>
  Agregar producto
</Link>

      {/**
            tabla de productos
             */}
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Description</Table.Column>
              <Table.Column>Brand</Table.Column>
              <Table.Column>Price</Table.Column>
              <Table.Column>Stock</Table.Column>
              <Table.Column>Rating</Table.Column>
              <Table.Column>Editar</Table.Column>

            </Table.Header>

            <Table.Body>
              {productsData.map((product) => (
                <Table.Row key={product.id}>

                  <Table.Cell>{product.name}</Table.Cell>
                  <Table.Cell>{product.description}</Table.Cell>
                  <Table.Cell>{product.brand}</Table.Cell>
                  <Table.Cell>{product.price}{product.currency}</Table.Cell>
                  <Table.Cell>{product.stock}</Table.Cell>
                  <Table.Cell>{product.rating}</Table.Cell>
                  <Table.Cell>
                    <Link
                      href={`/dashboard/products/${product.id}/edit`}
                      prefetch={false}
                      className="text-blue-500 hover:underline"
                    >
                      Editar
                    </Link>
                  </Table.Cell>

                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </main>
  )
}