import quests from '../data/data.js';
import { findById } from '../utils.js';
import { changeClout, completeQuest } from '../local-storage-utils.js';
import { renderHeader } from '../render-header.js';

renderHeader();

const main = document.querySelector('main');

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

const quest = findById(quests, id);

const questHeader = document.createElement('h1');
const questImg = document.createElement('img');
const questP = document.createElement('p');

questHeader.textContent = quest.title;
questImg.src = `../assets/${quest.image}`;
questP. textContent = quest.description;

questHeader.classList.add('quest-title');

questImg.classList.add('quest-image');
questImg.style.width = 'auto';
questImg.style.height = '500px';

questP.classList.add('quest-p');

const playerChoiceForm = document.createElement('form');
playerChoiceForm.classList.add('choice-form');

for (let choice of quest.choices) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';

    input.value = choice.id;

    label.append(choice.description, input);
    playerChoiceForm.append(label);

}

const choiceButton = document.createElement('button');
choiceButton.classList.add('choice-button');
choiceButton.textContent = 'Make Your Choice';
playerChoiceForm.append(choiceButton);

playerChoiceForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(playerChoiceForm);
    const choiceId = formData.get('choice');

    const choiceSelection = findById(quest.choices, choiceId);

    changeClout(choiceSelection.clout);
    completeQuest(quest.id);

    const resultsDiv = document.createElement('div');
    resultsDiv.textContent = choiceSelection.result;

    const redirectButton = document.createElement('button');
    redirectButton.textContent = 'Back to the Map';
    redirectButton.addEventListener('click', () => {
        window.location = '../map';
    });

    resultsDiv.append(redirectButton);
    playerChoiceForm.remove();
    main.append(resultsDiv);
});

main.append(questHeader, questImg, questP, playerChoiceForm);
