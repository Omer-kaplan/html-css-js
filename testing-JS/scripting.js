/* --- Main --- /

let listSimple = ['omer', 'Kaplan', 'infraDev', 'Adri', 'Mor'];
// console.log(listSimple[0]) == omer
listSimple.push('hahaLOL');

let numList = [1,2,3,4,5,6];
let indexer;
for (indexer = 0; indexer < numList.length; indexer++)
{
    console.log('The position is --> ' + indexer + ' Value ' + numList[indexer]);
}
/ -------------------------------------------------------------------------- */

// let dict = new Object();
// console.log(jsonFile.mostPopular[0].type);
// for (const [key, value] of Object.entries(jsonFile)){
//     let tmpSection = `${key}`; // ---> console.log(typeof(tmpSection)); == String
// }
// Object.entries(jsonFile).forEach(([key, value]) => {
//     console.log(key);
// });

// -----------------------------------------------------------------------------

// let jsonData = JSON.parse(hafifaJSON);
// import jsonFile from './hafifaJSON.json';
// console.log(jsonFile);

var jsonFile = {"lastUsed": [
		{
			"type": "plan",
			"title": "בדיקות מרשם"
		},
		{
			"type": "pool",
			"title": "מאגר"
		},
		{
			"type": "digger",
			"title": "דיגר עמר"
		},
		{
			"type": "plan",
			"title": "לחץ"
		},
		{
			"type": "digger",
			"title": "דיגדיגר"
		},
		{
			"type": "atPlan",
			"title": "בד.תכנון"
		},
        {
			"type": "plan",
			"title": "'' לחץ"
		}
	],
		"mostPopular": [
		{
			"type": "sys",
			"title": "קבוע מערכתי"
		},
		{
			"type": "disc",
			"title": "מור בדיקה"
		},
		{
			"type": "office",
			"title": "בדיקת OFFICE"
		},
		{
			"type": "sys",
			"title": "ניהול בקשות"
		},
        {
			"type": "disc",
			"title": "מור בדיקה"
		},
		{
			"type": "office",
			"title": "בדיקת OFFICE"
		},
		{
			"type": "plan",
			"title": "שירה בדיקה"
		}
	],
		"recommanded": [
		{
			"type": "opRep",
			"title": "דיווח מבצעי רצח"
		},
		{
			"type": "ldr",
			"title": "בום בום ופיו פיו"
		},
		{
			"type": "discMgmt",
			"title": "מאגר דיונים ותומכל"
		},
		{
			"type": "pool",
			"title": "מאגר נוסף"
		},
		{
			"type": "atPlanPool",
			"title": "מאגר פיו פיו ברבים"
		},
        {
			"type": "opRep",
			"title": "דיווח מבצעי רצח"
		},
		{
			"type": "ldr",
			"title": "בום בום ופיו פיו"
		},
		{
			"type": "discMgmt",
			"title": "מאגר דיונים ותומכל"
		},
		{
			"type": "pool",
			"title": "מאגר נוסף"
		},
		{
			"type": "atPlanPool",
			"title": "מאגר פיו פיו ברבים"
		},
        {
			"type": "opRep",
			"title": "דיווח מבצעי רצח"
		},
		{
			"type": "ldr",
			"title": "בום בום ופיו פיו"
		},
		{
			"type": "discMgmt",
			"title": "מאגר דיונים ותומכל"
		},
		{
			"type": "pool",
			"title": "מאגר נוסף"
		}
	]
};

// runs for the jsonFile, for LastUsed, mostPopular, Recommanded --> 
// runs again and builds the cards,
// Gets Random --- 0 not isValid, 1 isValid Sticker
// Getelementbyid is much faster and efficient

Object.keys(jsonFile).forEach(key => {
    const tmpSection = jsonFile[key]; // Object of the section
    const currentClass = key; // String of the section
    tmpSection.forEach( card => {
        let isValid = Math.round(Math.random()); // if (isValid)  {} else {}
        let recentsSection = document.getElementById(`${currentClass}`);
        if (isValid) { // With Sticker
            const content = `<div class="card">
                    <div class="sticker"> בתוקף </div>
                    <i class="material-icons">ICON-here</i>
                    <div class="main-description">
                        ${card.title}
                    </div>
                </div>`;
            recentsSection.innerHTML += content;
        }
        else // No Sticker
        {
        const content = `<div class="card">
                <i class="material-icons">ICON-here</i>
                <div class="main-description">
                    ${card.title}
                </div>
            </div>`;
        recentsSection.innerHTML += content;
        }
    });
}); 