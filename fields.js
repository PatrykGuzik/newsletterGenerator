class Field {
	static fields = [];
	static save = []
	static nbFields = 0;
	static contentNewsletter = [];
	static newsletterInnerHTML = "";

	constructor() {
		this.nbField = Field.nbFields;
		Field.nbFields++;
		Field.fields.push(this);
	}

	static upload() {
		Field.save.forEach(element => {
			console.log(element);
			element.drawHtmlFields = Field.drawHtmlFields
		});

		console.log(Field.save);
		Field.save.forEach(element => {
			element.drawHtmlFields();
		})
	}

	static drawNewsletter() {
		Field.newsletterInnerHTML = "";

		Field.newsletterInnerHTML += head;
		Field.newsletterInnerHTML += getSpace();
		Field.newsletterInnerHTML += logo;
		Field.newsletterInnerHTML += getSpace();

		Field.fields.forEach(field => {
			Field.newsletterInnerHTML += field.contentHTML;
		});

		Field.newsletterInnerHTML += getSpace();
		Field.newsletterInnerHTML += foot;

		const view = document.querySelector(".view");
		view.innerHTML = Field.newsletterInnerHTML;

		const code = document.querySelector(".code");
		code.innerText = Field.newsletterInnerHTML;
	}

	static drawHtmlFields() {
		const container = document.querySelector(".container");
		container.innerHTML = "";
		Field.fields.forEach(field => {
			container.innerHTML += field.getFieldHTML();
		});

		Field.fields.forEach(field => {
			field.updateFieldInputs();
		});
	}
}



// ----------------------------------------------------------------------
class FieldImage extends Field {
	constructor() {
		super();
        this.img = ''
        this.link = ''
        this.contentHTML = ''
		this.type = "image"
	}

	static makeNewImageField() {
		new FieldImage();
        Field.drawHtmlFields();
	}

	getFieldHTML() {
		return `
        <div data-n='${this.nbField}' class="field">
            <input data-n='${this.nbField}l' type="text" placeholder="link do obrazu" >
            <input data-n='${this.nbField}o' type="text" placeholder="odnośnik">
            <button data-n='${this.nbField}x'>X</button>
        </div>
        `;
	}

	updateFieldInputs() {
        const field = document.querySelector(`[data-n='${this.nbField}']`);
		const input1 = document.querySelector(`[data-n='${this.nbField}l']`);
		const input2 = document.querySelector(`[data-n='${this.nbField}o']`);
		const removeBtn = document.querySelector(`[data-n='${this.nbField}x']`);

        input1.value = this.img
        input2.value = this.link

		field.addEventListener("input", () => {
            this.img = input1.value;
            this.link = input2.value
            this.contentHTML = getImage(this.img,this.link);
		});


		removeBtn.addEventListener("click", () => {
			let newArray = [];
			Field.fields.forEach(field => {
				if (field != this) {
					newArray.push(field);
				}
			});
			Field.fields = newArray;

			Field.drawHtmlFields()
            Field.drawNewsletter()
		});
	}
}






// -----------------------------------------------------------------------------------
class FieldParagraph extends Field {
	constructor() {
		super();
        this.title = ''
        this.content = ''
		this.image = '';
        this.btn1 = '';
        this.btn1link = ''
        this.btn2 = '';
        this.btn2link = ''
        this.contentHTML = ''
		this.type = "paragraph"
	}

	static makeNewImageField() {
		// const container = document.querySelector(".container");

		new FieldParagraph();
		// container.innerHTML += field.getFieldHTML();
		Field.drawHtmlFields();
	}

	getFieldHTML() {
		return `
        <div data-p='${this.nbField}' class="field">
			<input data-img data-p='${this.nbField}o' type="text" placeholder="link do obrazu">
            <input data-title data-p='${this.nbField}ty' type="text" placeholder="Tytuł">
            <textarea data-area data-p='${this.nbField}tr' cols="30" rows="10" placeholder="Treść"></textarea>
            
			<div class="edit-btns">
				<div class="edit-btn">
					<input data-p='${this.nbField}btn1' type="text" placeholder="przycisk 1">
					<input data-p='${this.nbField}btn1link' type="text" placeholder="przycisk 1 - odnośnik">
				</div>
				
				<div class="edit-btn"> 
					<input data-p='${this.nbField}btn2' type="text" placeholder="przycisk 2">
					<input data-p='${this.nbField}btn2link' type="text" placeholder="przycisk 2 - odnośnik">
				</div>
			</div>

            <button data-p='${this.nbField}x'>X</button>
        </div>
        `;
	}

	updateFieldInputs() {
        const field = document.querySelector(`[data-p='${this.nbField}']`);
		const input1 = document.querySelector(`[data-p='${this.nbField}ty']`);
		const input2 = document.querySelector(`[data-p='${this.nbField}tr']`);
		const input3 = document.querySelector(`[data-p='${this.nbField}o']`);
		const input4 = document.querySelector(`[data-p='${this.nbField}btn1']`);
		const input5 = document.querySelector(`[data-p='${this.nbField}btn1link']`);
		const input6 = document.querySelector(`[data-p='${this.nbField}btn2']`);
		const input7 = document.querySelector(`[data-p='${this.nbField}btn2link']`);
        const removeBtn = document.querySelector(`[data-p='${this.nbField}x']`);

        input1.value = this.title;
        input2.value = this.content;
        input3.value = this.image;
        input4.value = this.btn1;
        input5.value = this.btn1link;
        input6.value = this.btn2;
        input7.value = this.btn2link;


		field.addEventListener("input", () => {
            this.title = input1.value
            this.content = input2.value
            this.image = input3.value
            this.btn1 = input4.value
            this.btn1link = input5.value
            this.btn2 = input6.value
            this.btn2link = input7.value
            this.contentHTML = getParagraph(this.title, this.content, this.image, this.btn1, this.btn1link , this.btn2, this.btn2link)

		});

        removeBtn.addEventListener("click", () => {
			let newArray = [];
			Field.fields.forEach(field => {
				if (field != this) {
					newArray.push(field);
				}
			});
			Field.fields = newArray;

			Field.drawHtmlFields()
            Field.drawNewsletter()
		});
	}
}
