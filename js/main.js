const view = document.querySelector(".view");
const code = document.querySelector(".code");

Field.save = JSON.parse(localStorage.getItem("save"));
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
	var blob = new Blob([code.innerText], { type: "text/plain;charset=utf-8" });
	saveAs(blob, "newsletter.html");
}

// do stylizacji:
// FieldImage.makeNewImageField();
// FieldParagraph.makeNewImageField();


console.log(Field.fields);

// góra dół:
const edit = document.querySelector(".edit")

edit.addEventListener("click", (e)=>{

	// przesuń w górę
	if (e.target.dataset.up) {
		const nr = parseInt(e.target.dataset.up) 

		Field.fields.filter(field => field.nbField == nr)[0].nbField = "temp"
		Field.fields.filter(field => field.nbField == nr-1)[0].nbField += 1
		Field.fields.filter(field => field.nbField == "temp")[0].nbField = nr-1

		sortAndDrawNewFields()
		console.log(Field.fields);
	}


	// przesuń w dół
	if (e.target.dataset.down) {
		const nr = parseInt(e.target.dataset.down) 
		Field.fields.filter(field => field.nbField == nr)[0].nbField = "temp"
		Field.fields.filter(field => field.nbField == nr+1)[0].nbField -= 1
		Field.fields.filter(field => field.nbField == "temp")[0].nbField = nr+1

		sortAndDrawNewFields()
		console.log(Field.fields);
	}
})


function sortAndDrawNewFields() {
	Field.fields.sort(function(a,b){
		if(a.nbField > b.nbField) return 1;
		else return -1;
	})
	Field.drawHtmlFields()
}