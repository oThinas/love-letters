import { emitText, getDocument } from './socket.front.document.js';

const documentName = new URLSearchParams(window.location.search).get('name');
const documentTitleElement = document.querySelector('#document-title');

documentTitleElement.textContent = documentName || 'Documento sem título';

getDocument(documentName);

const textareaElement = document.querySelector('#text-editor');
textareaElement.addEventListener('keyup', () => {
  emitText(textareaElement.value, documentName);
});

export function setText(text) {
  textareaElement.value = text;
}
