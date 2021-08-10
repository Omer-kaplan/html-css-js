import { jsonData } from "./dataJson.js";
import { cardExtraStyles } from "./dictionary.js";

let dict = {
  lastUsed: "שומשו לאחרונה:",
  mostPopular: "פופולארי / כללי:",
  recommanded: "מומלץ:",
};
let isValid;
let isOption;
let iconPath;

Object.keys(jsonData).forEach((key) => {
  const cardAtributes = jsonData[key];
  let section = document.getElementById(`sections`);
  const data = `<section id="${key}">
            <header class="main-headers">
            <p class="main-headers-txt">${dict[key]}</p>
            <hr>
            </header>
            <div class="row">
                ${cardAtributes
                  .map((card) => {
                    let typeName = card.type;
                    isValid = cardExtraStyles[typeName]["isvalid"];
                    isOption = cardExtraStyles[typeName]["options"];
                    iconPath = cardExtraStyles[typeName]["icon"];

                    return `<div class="card">
                        ${isValid ? '<div class="sticker"> בתוקף </div>' : ""}
                        ${isOption ? "<span>&#10247;</span>" : ""}
                        <img src="${iconPath}" alt="relev.icon" class="material-icons"></i>
                        <div class="main-description">
                        ${card.title}
                        </div>
                        </div>`;
                  })
                  .join(" ")}
            </div>
        </section>`;
  section.innerHTML += data;
});
