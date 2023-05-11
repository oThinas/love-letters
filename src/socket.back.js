import { io } from './server.js';

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('client get document', (documentName) => {
    socket.join(documentName);
  });

  socket.on('client typing', ({ text, documentName }) => {
    socket.to(documentName).emit('server typing', text);
  }); 
});
