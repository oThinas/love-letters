import { insertDocumentLink } from './index.js';

const socket = io();

socket.emit('client get documents', (data) => {
  data.forEach((document) => {
    insertDocumentLink(document.name);
  });
});

export function addDocumet(documentName) {
  socket.emit('client add document', documentName);
}

socket.on('server add document', (documentName) => {
  insertDocumentLink(documentName);
})
