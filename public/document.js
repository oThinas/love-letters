import { emitText } from './socket.front.js';

const documentName = new URLSearchParams(window.location.search).get('name');
const documentTitleElement = document.querySelector('#document-title');

documentTitleElement.textContent = documentName || 'Documento sem título';

const textareaElement = document.querySelector('#text-editor');
textareaElement.addEventListener('keyup', () => {
  emitText(textareaElement.value);
});

export function setText(text) {
  textareaElement.value = text;
}
