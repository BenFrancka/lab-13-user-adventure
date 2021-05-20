import { getUser } from '../local-storage-utils.js';
import { renderHeader } from '../render-header.js';
import { getEndingMessage } from './message.js';

const user = getUser();
renderHeader();
const results = document.querySelector('#results');
results.textContent = getEndingMessage(user);