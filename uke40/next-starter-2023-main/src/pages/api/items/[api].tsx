// Importing the 'NextResponse' object from the 'next/server' module.
import {createProducts} from "@/features/products/generateProducts";
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const productList = createProducts(10)
        res.status(200).json(Array.from(productList.values()))

    } else {
        // Handle any other HTTP method
    }
}