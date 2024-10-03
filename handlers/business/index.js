import records from "../../utils/business"

export default async function handler(req, res) {
  const { method } = req;

// E.G. http://localhost:3001/api/business?page=1

// username
// items

  const NUM_ITEMS = 20;

  switch (method) {
    case 'GET':
      const page = req.query.page;
      const indexPage = page -1;
      const results = records.slice(indexPage * NUM_ITEMS, indexPage * NUM_ITEMS + NUM_ITEMS);
    //   results.push(records.find((record) => record.id.toUpperCase().includes(search.toUpperCase())));
    //   if(search !== '' && results.length > 0) {
    //     return res.status(200).json(results);
    //   }
      res.status(200).json({ results: results, info: { pages: records.length / NUM_ITEMS }});
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
