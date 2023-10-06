import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(405).json({ message: "Please use the POST method to add an item."})
    }
    if (req.method === 'POST') {
        res.status(200).json(req.body)
    }
}