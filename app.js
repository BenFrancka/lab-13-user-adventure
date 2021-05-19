// import functions and grab DOM elements

import { setUser } from './local-storage-utils.js';

const form = document.querySelector('#user-form');
 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const username = formData.get('user-name');
    const userClass = formData.get('user-class');

    const userObj = {
        name: username,
        class: userClass,
        clout: 10,
        complete: {},
    };
    setUser(userObj);
    window.location.replace('./map');
});
