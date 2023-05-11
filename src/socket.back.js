import { io } from './server.js';

const documents = [
  {
    name: '4 anos juntos',
    text: 'texto do documento 4 anos juntos...'
  },
  {
    name: 'Mel',
    text: 'texto do documento Mel...'
  },
  {
    name: 'Tapioca',
    text: 'texto do documento Tapioca...'
  },
];

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('client get document', (documentName, responseText) => {
    socket.join(documentName);

    const document = findDocument(documentName);
    if (document) {
      responseText(document.text);
    }
  });

  socket.on('client typing', ({ text, documentName }) => {
    const document = findDocument(documentName);
    if (document) {
      document.text = text;
      socket.to(documentName).emit('server typing', text);
    }
  }); 
});

function findDocument(documentName) {
  return documents.find((doc) => doc.name === documentName);
}
