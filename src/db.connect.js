import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const url = `mongodb+srv://thinas:${process.env.DB_PASSWORD}@livrariaapi.npq73tp.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(url);

export let documentsCollection;
try {
  await client.connect();
  const db = client.db('love-letters');
  documentsCollection = db.collection('letters');
  console.log('Conectado com sucesso!');
} catch (error) {
  console.log(error);
}
