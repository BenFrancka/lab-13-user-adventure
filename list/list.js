import { getUser } from '../local-storage-utils.js';
import { findById } from '../utils.js';
import quests from '../data/data.js';

export function completeQuest(Id) {
    const ul = document.querySelector('.quest-log');
    const user = getUser();
    const li = document.createElement('li');
    const quest = findById(quests, Id);
    user.complete.push(quest.id);
    const span = document.createElement('span');
    span.style.textDecoration = 'line-through';
    span.textContent = quest.title;
    li.appendChild(span);
    ul.appendChild(li);
}