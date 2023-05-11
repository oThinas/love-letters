import { setText } from './document.js';

const socket = io();

export function getDocument(documentName) {
  socket.emit('client get document', documentName);
}

export function emitText(text, documentName) {
  socket.emit('client typing', { text, documentName });
}

socket.on('server typing', (data) => {
  setText(data);
});
