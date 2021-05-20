import { evalClout } from './eval-clout.js';

export const cloutMessage = {
    high: 'You have so much clout you broke the internet',
    medium: 'You have a steady following, but you are no influencer',
    poor: 'You got cancelled',
    dead:'You have faded into obscurity, never come back to the internet'
};

export function getEndingMessage(user) {
    let finalMessage = `Congrats ${user.class} ${user.name}, you finished the game! `;
    finalMessage = finalMessage + `${evalClout(user)}`;
    return (finalMessage);
}
