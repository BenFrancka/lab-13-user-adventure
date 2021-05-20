import { getUser } from './local-storage-utils';

export function renderHeader() {
    const header = document.querySelector('header');
    const user = getUser();
    const div = document.createElement('div');
    const name = document.createElement('p');
    const clout = document.createElement('p');

    name.textContent = `Name: ${user.name}`;
    clout.textContent = `Clout: ${user.clout}`;
    header.appendChild(div.append(name, clout));
}