import { setText } from './document.js';

const socket = io();

export function emitText(text) {
  socket.emit('client typing', text);
}

socket.on('server typing', (data) => {
  setText(data);
});
