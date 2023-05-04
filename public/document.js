import { emitText } from './socket.front.js';

const textareaElement = document.querySelector('#text-editor');
textareaElement.addEventListener('keyup', () => {
  emitText(textareaElement.value);
});

export function setText(text) {
  textareaElement.value = text;
}
