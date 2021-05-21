import quests from './data/data.js';
const USER = 'USER';

export function getUser() {
    const sUser = localStorage.getItem(USER);
    if (!sUser) {
        return ({});
    }
    const user = JSON.parse(sUser);
    return (user);
}

export function setUser(user) {
    const sUser = JSON.stringify(user);
    localStorage.setItem(USER, sUser);
}

export function changeClout(value) {
    const user = getUser();
    user.clout = user.clout + value;
    setUser(user);
}

export function cloutDeath(value) {
    if (Number(value) < 1)
        return (true);
    return (false);
}

export function completeAll() {
    const user = getUser();
    for (let quest of quests) {
        if (!user.complete[quest.id])
            return (false);
    }
    return (true);
}

export function completeQuest(id) {
    const user = getUser();
    user.complete[id] = true;
    user.wins++;
    setUser(user);
}