export interface product {
    id: number,
    name: string,
    description: string,
    brand: string,
    images: string[],
    cover: string,
    price: number,
    currency: string,
    stock: number,
    rating: number,
}

// Aarray temporal con productos
export const products: product[] = [
    {
        id: 1,
        name: "computadora HP pavilion SD5000",
        description: "Super computadora portatil",
        brand: "HP",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVEYwOZe39wNGBS5rnH9SDlGgi1W-7pIQ6AnkhFQ0W_Q&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjtjK9FgkovzTL2B5P4aWWDNRSivQmcNTPVYpsrnEKSg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6erO5lf8aFol3EE3agODmzJHeaVAAo03W1rrrnkYz6g&s=10"],
        cover: "https://elektra.vtexassets.com/arquivos/ids/32776162-800-auto?v=639256261288070000&width=800&height=auto&aspect=true",
        price: 12000.00,
        currency: "MXN",
        stock: 850,
        rating: 4.9,
    },
    {
        id: 2,
        name: "computadora Macbook pro",
        description: "Super computadora portatil alta calidad",
        brand: "Macbook",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHglYbb8fIeZfpdjQ2r9UUndQ6cpz2B8cZSCs10YVeA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzF-bKYSXlT6RsGqS6PxvJhDEsbosZ-5AI0ZxWKVywAs8ywNyIKtE6YL-&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYdVxx8L_n28BwnCQe9GEI55kPMZpHOMUY_owliz0t5FW3W-9UC_IZANyl&s=10"],
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOidotF-v_Qgj9r2TgrrRVyYpMARCB_fg4oKSW1FbPVQ&s",
        price: 300000.00,
        currency: "MXN",
        stock: 1000,
        rating: 4.99,
    }

];