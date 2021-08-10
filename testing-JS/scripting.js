import {jsonData} from './dataJson.js';
import {isButtons} from './dictionary.js';

let dict = {
    'lastUsed' : 'שומשו לאחרונה:', 
    'mostPopular' : 'פופולארי / כללי:', 
    'recommanded' : 'מומלץ:'
 }

let isValid;
let isOption;
let iconPath;

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
        let recentsSection = document.getElementById(`${key}Div`);
        let typeName = card.type;
        Object.keys(isButtons).forEach(k => {
            let atr = isButtons[k];
            if (typeName === k) {
                isValid = atr['isvalid'];
                isOption = atr['options'];
                iconPath = atr['icon'];
            }
        });
        const content = `<div class="card">
                ${isValid ? '<div class="sticker"> בתוקף </div>' : ''}
                ${isOption ? '<div class="three-dots"></div>' : ''}
                <img src="${iconPath}" alt="relev.icon" class="material-icons"></i>
                <div class="main-description">
                    ${card.title}
                </div>
            </div>`;
        recentsSection.innerHTML += content;
    });
});