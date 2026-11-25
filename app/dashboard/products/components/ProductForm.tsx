"use client"
import { product } from "@/app/api/products/data";
//app/dashboard/products/components/ProductForm.tsx
import { useRouter } from "next/navigation";

import { saveProduct, updateProduct } from "@/services/products-service";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { SyntheticEvent } from "react";


interface Props {
    product: product;
}

/**
 * Formulario para acreditar/editar producto
 */
export function ProductForm({ product }: Props) {
    const router = useRouter();

    function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const productData = Object.fromEntries(formData);

        console.log('Datos: ', productData);
        //Enviar productData al backend por la función de servicio

        //Hacer que product sea equivalente a Product
                // Si el producto tiene id, se edita (PUT); si no, se crea (POST)
        const request = product.id
            ? updateProduct(product.id, { ...productData, currency: "MXN" } as any)
            : saveProduct({ ...productData, currency: "MXN" } as any);

        request
            .then((result) => {
                console.log(result);

                if (result) {
                    //Preferible usar un TOAST
                    alert("Producto guardado");
                    //Redireccionar a /products
                    router.push("/dashboard/products");
                }
            })
            .catch((error) => {
                console.log(error);
                alert(`Error al guardar productos: ${error.message}`);
            });
    }

    return (
        <Form className="flex w-96 flex-col gap-4" onSubmit={handleSubmit}>
            <TextField
                isRequired
                name="name"
                type="text"
                defaultValue={product?.name}  
                validate={(value) => {
                    if (value.length < 8) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label>Name</Label>
                <Input placeholder="iPhone Duo" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="description"
                type="text"
                defaultValue={product?.description}  
                validate={(value) => {
                    if (value.length < 8) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label>Descripción</Label>
                <Input placeholder="Se rompe." />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="brand"
                type="text"
                defaultValue={product?.brand}  
                validate={(value) => {
                    if (value.length < 2) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label>Brand</Label>
                <Input placeholder="Apple" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="cover"
                type="url"
                defaultValue={product?.cover}
                validate={(value) =>
                    !/^https?:\/\/.+/.test(value) ? "Ingresa una URL válida (http o https)" : null
                }
            >
                <Label>Imagen (URL)</Label>
                <Input placeholder="Añade un enlace" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="price"
                inputMode="decimal"
                defaultValue={product?.price?.toString()}  
                validate={(value) => {
                    if (value.length < 2) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label>Price</Label>
                <Input placeholder="68000.99" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="stock"
                inputMode="numeric"
                defaultValue={product?.stock?.toString()}  
                validate={(value) => {
                    if (value.length < 1) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label>Stock</Label>
                <Input placeholder="0" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="rating"
                inputMode="decimal"
                defaultValue={product?.rating?.toString()}  

                validate={(value) => {
                    if (value.length < 1) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label>Rating</Label>
                <Input placeholder="3.9" />
                <FieldError />
            </TextField>

            <div className="flex gap-2">
                <Button type="submit">
                    Agregar
                </Button>
                <Button type="reset" variant="secondary">
                    Cancelar
                </Button>
            </div>
        </Form>
    )
}