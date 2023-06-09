import { addDocumet } from './socket.front.index.js';

const listElement = document.querySelector('#document-list');
const formElement = document.querySelector('#form-add-document');
const inputElement = document.querySelector('#name');
const feedbackElement = document.querySelector('#feedback')

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  addDocumet(inputElement.value);
  inputElement.value = '';
})

export function insertDocumentLink(documentName) {
  listElement.innerHTML += `
    <a
      href="document.html?name=${documentName}"
      class="list-group-item list-group-item-action"
      id="${documentName}"
    >
      ${documentName}
    </a>
  `;
}

export function alertInvalidName(documentName) {
  inputElement.classList.add('is-invalid');
  feedbackElement.innerHTML = `Documento ${documentName} já existe`;
}

export function removeDocumentLink(documentName) {
  const documentLinkElement = document.querySelector(`#${documentName}`);
  listElement.removeChild(documentLinkElement);
}