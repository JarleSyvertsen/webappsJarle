import {createProducts} from "@/features/products/generateProducts";
import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {

        const { api } = req.query;

        if(!api) {
            return;
        }

        const items = Number(api.toString()) || 1;
        const productList = createProducts(items)
        res.status(200).json(Array.from(productList.values()))

    } else {
    }
}