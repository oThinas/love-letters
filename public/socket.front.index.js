import { insertDocumentLink } from './index.js';

const socket = io();

socket.emit('client get documents', (data) => {
  data.forEach((document) => {
    insertDocumentLink(document.name);
  });
});

