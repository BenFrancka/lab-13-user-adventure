// import functions and grab DOM elements

import { setUser } from './local-storage-utils.js';

const form = document.querySelector('#user-form');
 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const username = formData.get('user-name');
    const userClass = formData.get('user-class');
    let userClout = 0;
    if (userClass === 'data-wrangler') {
        userClout = 20;
    }
    if (userClass === 'techno-wizard') {
        userClout = 10;
    }
    if (userClass === 'internet-troll') {
        userClout = 5;
    }
    if (userClass === 'tiktok-influencer') {
        userClout = 30;
    }
    const userObj = {
        name: username,
        class: userClass,
        clout: Number(`${userClout}`),
        swag: 10,
        complete: {},
        wins: 0
    };
    setUser(userObj);
    window.location.replace('./map');
});
