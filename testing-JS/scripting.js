import {jsonData} from './dataJson.js';

let dict = {
    'lastUsed' : 'שומשו לאחרונה:', 
    'mostPopular' : 'פופולארי / כללי:', 
    'recommanded' : 'מומלץ:'
 }

Object.keys(jsonData).forEach(key => {
    const cardAtributes = jsonData[key];   // Object of the section
    let section = document.getElementById(`${key}`);
    const data = `<header class="main-headers">
        <p class="main-headers-txt">${dict[key]}</p>
        <hr>
        </header>
        <div class="row" id="${key}Div"></div>`
    section.innerHTML += data;
    cardAtributes.forEach( card => {
        let isValid = Math.round(Math.random()); // is valid 1 or not 0;
        let recentsSection = document.getElementById(`${key}Div`);
            const content = `<div class="card">
                    <div class="three-dots"></div>
                    ${isValid ? '<div class="sticker"> בתוקף </div>' : ''}
                    <i class="material-icons">ICON-here</i>
                    <div class="main-description">
                        ${card.title}
                    </div>
                </div>`;
            recentsSection.innerHTML += content;
    });
});