const view = document.querySelector(".view");
const code = document.querySelector(".code");


// 	{ add: getImage("https://carbonfootprintfoundation.com/wp-content/uploads/2021/12/image-21-1-scaled.jpg")},
// 	{ add: getSpace() },
// 	{ add: getParagraph("tytuł", "text paragrafu", "https://carbonfootprintfoundation.com/wp-content/uploads/2022/04/nws3.png")},
// 	{ add: getSpace() },
// 	{ add: getParagraph("Lorem ipsum", "text paragrafu")},
// 	{ add: getSpace() },
// 	{ add: getParagraph("tytuł", "text paragrafu", "https://carbonfootprintfoundation.com/wp-content/uploads/2022/04/nws3.png")}



const newsletter = [
	{ add: head },
	{ add: getSpace() },
	{ add: logo },
	{ add: getSpace() },
	{ add: getSpace() },
	{ add: foot },
];

let viewHTML = "";
newsletter.forEach(element => {
	viewHTML += element.add;
});

view.innerHTML = `
    ${viewHTML}
`;

code.innerText = viewHTML




function addImgBlock() {
	FieldImage.makeNewImageField()
}

function addParagraphBlock() {
	FieldParagraph.makeNewImageField()
}

function update() {
	Field.drawNewsletter()
	Field.drawHtmlFields()
}


function copyHTML(){
	const code = document.querySelector(".code-area")
	const btn = document.querySelector("#copy-btn")
	// code.select();
	navigator.clipboard.writeText(code.innerText);

	btn.innerHTML = "Skopiowano"
	setTimeout(() => {
		btn.innerHTML = "kopiuj HTML"
	}, 2000);
}

// do stylizacji:
FieldParagraph.makeNewImageField()
FieldImage.makeNewImageField()