export default class LottoStarForm
{
    constructor(title,fields)
    {
        this.fields = fields;
        this.title = title;
    }

    render(componentContainer){
        let lottoStarForm = document.createElement("div");
        let lottStarFormTitle = document.createElement("div");
        let lottStarFormTitleText = document.createElement("span");
        
        lottStarFormTitleText.innerHTML = this.title;
        lottStarFormTitle.classList.add("lt-form-title");
        lottoStarForm.classList.add("lt-form-body");

        lottStarFormTitle.appendChild(lottStarFormTitleText);
        let hrContainer  = document.createElement("div");
        hrContainer.appendChild(document.createElement("hr"));
        lottStarFormTitle.appendChild(hrContainer);
        lottoStarForm.classList.add("lt-form-container");
        [...this.fields].forEach(fieldRec=>{
            let formField  = document.createElement(fieldRec.tagName);
            let checkBoxContainer = document.createElement("div");
            let isCheckBox = fieldRec.type==="checkbox";
            if(isCheckBox){
                let checkBoxLabel = document.createElement("span");
                checkBoxLabel.innerHTML = fieldRec.name;
                checkBoxContainer.appendChild(formField);
                checkBoxContainer.appendChild(checkBoxLabel);
            }
            formField.setAttribute("placeholder",fieldRec.placeholder);
            formField.setAttribute("type",fieldRec.type);
            formField.setAttribute("name",fieldRec.name);

            lottoStarForm.appendChild(isCheckBox?checkBoxContainer:formField);
        });
        componentContainer.classList.add("lt-form-container");
        componentContainer.appendChild(lottStarFormTitle);
        componentContainer.appendChild(lottoStarForm);
        return componentContainer;
    }
}