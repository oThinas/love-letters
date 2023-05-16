import { documentsCollection } from './db.connect.js';
import { io } from './server.js';

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('client get document', async (documentName, responseText) => {
    socket.join(documentName);

    const document = await documentsCollection.findOne({ name: documentName });
    if (document) {
      responseText(document.content);
    }
  });

  socket.on('client typing', async ({ text, documentName }) => {
    const updateResponse = await documentsCollection.updateOne({ name: documentName }, { $set: { content: text } });

    if (updateResponse.modifiedCount) {
      socket.to(documentName).emit('server typing', text);
    }
  }); 
});

