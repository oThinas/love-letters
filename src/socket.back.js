import { getAllDocuments, getDocument, insertDocument, updateDocument } from './documents.crud.js';
import { io } from './server.js';

io.on('connection', (socket) => {
  socket.on('client get documents', async (sendDocuments) => {
    const documents = await getAllDocuments();
    sendDocuments(documents);
  });

  socket.on('client add document', async (documentName) => {
    const hasDocumentWithSameName = (await getDocument(documentName)) !== null;
    if (hasDocumentWithSameName) {
      socket.emit('server document already exists', documentName);
    } else {
      const response = await insertDocument(documentName);
      if (response.acknowledged) {
        io.emit('server add document', documentName);
      }
    }
  });

  socket.on('client get document', async (documentName, responseText) => {
    socket.join(documentName);

    const document = await getDocument(documentName);
    if (document) {
      responseText(document.content);
    }
  });

  socket.on('client typing', async ({ text, documentName }) => {
    const updateResponse = await updateDocument(documentName, text);
    if (updateResponse.modifiedCount) {
      socket.to(documentName).emit('server typing', text);
    }
  }); 
});

