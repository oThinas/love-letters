import { documentsCollection } from './db.connect.js';

export function getAllDocuments() {
  return documentsCollection.find().toArray();
}

export function getDocument(documentName) {
  return documentsCollection.findOne({ name: documentName });
}

export function insertDocument(documentName) {
  return documentsCollection.insertOne({ name: documentName, content: '' });
}

export function updateDocument(documentName, text) {
  return documentsCollection.updateOne({ name: documentName }, { $set: { content: text } });
}