import Link from "next/link";

import { Card } from "@heroui/react";
import { product } from "../api/products/data";

interface Props {
    product: product;
}

export default function ProductCard ({
        product,
    }: Props) {

        return (
            
        <Link href={`/products/${product.id}`}>
          <Card className="w-[280px] gap-2 cursor-pointer hover:shadow-lg transition-shadow">
            <div className="bg-gray-100 p-4 h-80">
              <img
                alt="Control"
                className="w-full h-full rounded-2xl object-cover"
                src={product.cover}
              />
            </div>
            <Card.Header>
              <Card.Title>{product.name}</Card.Title>
              <p className="font-bold text-green-600">{product.price} {product.currency}</p>
              <Card.Description>{product.description}</Card.Description>
            </Card.Header>
            <Card.Footer className="flex gap-2">
              <span className="text-xs">⭐ {product.rating}</span>
              <span className="text-xs">1000 Sold</span>
            </Card.Footer>
          </Card>
        </Link>
        );
    }