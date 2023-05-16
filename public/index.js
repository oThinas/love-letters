import './socket.front.index.js';

const listElement = document.querySelector('#document-list');

export function insertDocumentLink(documentName) {
  listElement.innerHTML += `
    <a href="document.html?name=${documentName}" class="list-group-item list-group-item-action">
      ${documentName}
    </a>
  `;
}
