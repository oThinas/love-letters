import { io } from './server.js';

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('client typing', (data) => {
    socket.broadcast.emit('server typing', data);
  }); 
});
