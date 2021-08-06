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

// let jsonData = JSON.parse(hafifaJSON);
// import jsonFile from './hafifaJSON.json'; //(with path)
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
			"title": "קפלן לחץ"
		},
		{
			"type": "digger",
			"title": "דיגדיגר"
		},
		{
			"type": "atPlan",
			"title": "בד.תכנון"
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
		},{
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
		},{
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

//  <div class="sticker"> בתוקף </div>

let recentsSection = document.querySelector('#recents');
jsonFile.mostPopular.forEach( cardtemplate => {
    const content = `<div class="card">
                        <i class="material-icons">ICON-here</i>
                        <div class="main-description">
                            ${cardtemplate.title}
                        </div>
                    </div>`;
    recentsSection.innerHTML += content;
});

let popularSection = document.querySelector('#popular');
jsonFile.lastUsed.forEach( cardtemplate => {
    const content = `<div class="card">
                        <i class="material-icons">ICON-here</i>
                        <div class="main-description">
                            ${cardtemplate.title}
                        </div>
                    </div>`;
    popularSection.innerHTML += content;
});

let recommandedSection = document.querySelector('#recommanded');
jsonFile.recommanded.forEach( cardtemplate => {
    const content = `<div class="card">
                        <i class="material-icons">ICON-here</i>
                        <div class="main-description">
                            ${cardtemplate.title}
                        </div>
                    </div>`;
    recommandedSection.innerHTML += content;
});