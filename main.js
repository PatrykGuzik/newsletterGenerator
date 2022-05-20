const view = document.querySelector(".view");
const code = document.querySelector(".code");

Field.save = JSON.parse(localStorage.getItem("save"));

console.log(Field.save);

Field.upload();

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

code.innerText = viewHTML;

function addImgBlock() {
	FieldImage.makeNewImageField();
}

function addParagraphBlock() {
	FieldParagraph.makeNewImageField();
}

function update() {
	Field.drawNewsletter();
	Field.drawHtmlFields();
	localStorage.setItem("save", JSON.stringify(Field.fields));
}

function copyHTML() {
	const code = document.querySelector(".code-area");
	const btn = document.querySelector("#copy-btn");
	// code.select();
	navigator.clipboard.writeText(code.innerText);

	btn.innerHTML = "Skopiowano";
	setTimeout(() => {
		btn.innerHTML = "kopiuj HTML";
	}, 2000);
}

function download() {


	var blob = new Blob([viewHTML], { type: "text/plain;charset=utf-8" });
	saveAs(blob, "newsletter.html");
}

// do stylizacji:
FieldImage.makeNewImageField();
FieldParagraph.makeNewImageField();
