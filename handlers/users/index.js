import records from "../../utils/users"

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
        res.status(200).json(records);
        break;
        default:
        res.status(200).json(records);
    }
}
