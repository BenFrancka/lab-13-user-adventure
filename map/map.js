import quests from '../data/data.js';
import { completeAll, getUser } from '../local-storage-utils.js';
import { renderHeader } from '../render-header.js';
const questLog = document.querySelector('.quest-log');
const user = getUser();

renderHeader();
for (let quest of quests){
    const li = document.createElement('li');
    li.classList.add('quest-links');
    
    if (user.complete[quest.id]) {
        const span = document.createElement('span');
        span.style.textDecoration = 'line-through';
        span.textContent = quest.title;
        li.appendChild(span);
    }
    else {
        if (user.clout >= quest.requiredClout){
            const a = document.createElement('a');
            a.href = `../quest/?id=${quest.id}`;
            a.textContent = quest.title;
            li.append(a);
        }
    }
    questLog.append(li);
    if (completeAll() === true)
        window.location = '../results';
}
if (Number(user.clout) < 1){
    window.location = '../results';
}
if (user.wins === 3 && user.clout < 50) {
    window.location = '../results';
}
