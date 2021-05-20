import { cloutMessage } from './message.js';

export function evalClout(user) {
    if (user.clout > 70)
        return (cloutMessage.high);
    else if (user.clout > 40)
        return (cloutMessage.medium);
    else if (user.clout > 0)
        return (cloutMessage.poor);
    else
        return (cloutMessage.dead);
}