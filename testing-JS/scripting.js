/* --- Main --- /

let listSimple = ['omer', 'Kaplan', 'infraDev', 'Adri', 'Mor'];
// console.log(listSimple[0]) == omer
listSimple.push('hahaLOL');
/ -------------------------------------------------------------------------- */
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
			"title": "לחץ"
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

// Dictionary 3 opt: 1-recent 2-popular 3-recommand.
// foreach json key ---> fits right text between tags
// runs for the jsonFile, for LastUsed, mostPopular, Recommanded --> 
// runs again and builds the cards,
// Gets Random --- 0 not isValid, 1 isValid Sticker
// Getelementbyid is much faster and efficient

Object.keys(jsonFile).forEach(key => {
    const tmpSection = jsonFile[key]; // Object of the section
    const currentClass = key; // String of the section

    // let section = document.getElementById(`${currentClass}`);
    // const data = `<header class="main-headers">
    //     <p class="main-headers-txt">${dictionary}</p>
    //     <hr>
    //     </header>
    // section.innerHTML += data;  רוצה לעטוף גם סקשן וגם דיב יחד ולהחזיר אובייקט אחד, יודע בשניים כרגע

    tmpSection.forEach( card => {
        let isValid = Math.round(Math.random()); // is valid 1 or not 0;
        let recentsSection = document.getElementById(`${currentClass}`);
        if (isValid) { // With Sticker
            const content = `<div class="card">
                    <div class="three-dots"></div>
                    <div class="sticker"> בתוקף </div>
                    <i class="material-icons">ICON-here</i>
                    <div class="main-description">
                        ${card.title}
                    </div>
                </div>`;
            recentsSection.innerHTML += content;
        }
        else // Without Sticker
        {
        const content = `<div class="card">
                <div class="three-dots"></div>
                <i class="material-icons">ICON-here</i>
                <div class="main-description">
                    ${card.title}
                </div>
            </div>`;
        recentsSection.innerHTML += content;
        }
    });
}); 