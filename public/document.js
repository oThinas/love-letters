import { deleteDocument, emitText, getDocument } from './socket.front.document.js';

const documentName = new URLSearchParams(window.location.search).get('name');
const documentTitleElement = document.querySelector('#document-title');
const deleteButtonElement = document.querySelector('#delete-document');

documentTitleElement.textContent = documentName || 'Documento sem título';

getDocument(documentName);

const textareaElement = document.querySelector('#text-editor');
textareaElement.addEventListener('keyup', () => {
  emitText(textareaElement.value, documentName);
});

export function setText(text) {
  textareaElement.value = text;
}

deleteButtonElement.addEventListener('click', () => deleteDocument(documentName));

export function alertUser(documentName) {
  alert(`O documento "${documentName}" foi deletado.`);
  window.location.href = '/';
}