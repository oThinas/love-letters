import { alertUser, setText } from './document.js';

const socket = io();

export function getDocument(documentName) {
  socket.emit('client get document', documentName, (data) => {
    setText(data);
  });
}

export function emitText(text, documentName) {
  socket.emit('client typing', { text, documentName });
}

export function deleteDocument(documentName) {
  socket.emit('client delete document', documentName);
}

socket.on('server typing', (data) => setText(data));

socket.on('server delete document', (documentName) => alertUser(documentName));
