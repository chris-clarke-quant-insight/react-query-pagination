import records from "../../utils/profile"

export default async function handler(req, res) {
  const { method } = req;

// E.G. http://localhost:3001/api/profile?id=alice

// id
// items

  switch (method) {
    case 'GET':
      const id = req.query.id;
      const foundRecord = records.find((record) => record.id === id);
      if (foundRecord) {
        res.status(200).json(foundRecord.items);
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
      break;
    case 'POST':
      // Create a new record
      try {
        const newRecord = JSON.parse(req.body);
        records.push(newRecord);
        res.status(201).json(newRecord);
      } catch (err) {
        res.status(400).json({ message: 'Invalid record data' });
      }
      break;
    case 'PUT':
      // Update a record (replace with proper update logic)
      try {
        const updatedRecord = JSON.parse(req.body);
        const recordIndex = records.findIndex((record) => record.username === updatedRecord.username);
        if (recordIndex !== -1) {
          records[recordIndex] = updatedRecord;
          res.status(200).json(updatedRecord);
        } else {
          res.status(404).json({ message: 'Record not found' });
        }
      } catch (err) {
        res.status(400).json({ message: 'Invalid record data' });
      }
      break;
    case 'DELETE':
      // Delete a record
      try {
        const name = req.query.username;
        records = records.filter((record) => record.username !== name);
        res.status(200).json({ message: 'Record deleted' });
      } catch (err) {
        res.status(400).json({ message: 'Error deleting record' });
      }
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}
