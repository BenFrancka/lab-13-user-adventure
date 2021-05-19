import quests from '../data/data.js';
const questLog = document.querySelector('.quest-log');

for (let quest of quests){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `./quest?id=${quest.id}`;
    a.textContent = quest.title;
    li.append(a);
    questLog.append(li);
}