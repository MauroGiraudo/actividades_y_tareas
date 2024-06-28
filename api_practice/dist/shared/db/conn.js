import { MongoClient } from "mongodb";
const connectionString = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(connectionString);
await client.connect();
export let db = client.db('heroclash4geeks');
//# sourceMappingURL=conn.js.map