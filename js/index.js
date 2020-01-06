import LottoStarForm from "./lottoStarComponents/LottoStarForm.component.js";
import LottoStarButton from "./lottoStarComponents/lottoStarButton.component.js";

let lsForm = new LottoStarForm("NAME ONE LOTTERY GAME YOU CAN BET ON AT LOTTOSTAR.CO.ZA",[
    {
        tagName:"input",
        type:"text",
        placeholder:"E.G LOTTERY",
        name:"Name"
    }
]);

let lsForm2 = new LottoStarForm("TELL US WHO YOU ARE",[
    {
        tagName:"input",
        type:"text",
        placeholder:"ID Number",
        name:"Name"
    },
    {
        tagName:"input",
        type:"text",
        placeholder:"NAME",
        name:"Name3"
    },
    {
        tagName:"input",
        type:"text",
        placeholder:"SURNAME",
        name:"Name2"
    },
    {
        tagName:"input",
        type:"text",
        placeholder:"EMAIL",
        name:"Name4"
    },
    {
        tagName:"input",
        type:"text",
        placeholder:"MOBILE NUMBER",
        name:"Name8"
    }
    ,
    {
        tagName:"input",
        type:"checkbox",
        placeholder:"",
        name:"Accept TS & C'S"
    }
]);

let lsSubmitFormButton = new LottoStarButton("SUBMIT NOW");
lsSubmitFormButton.onClick((event)=>{
   alert("TO DO");
});


let formContainers = [lsForm,lsForm2].map(formComponent=>{
    let componentContainer = document.createElement("div");
    componentContainer.style.marginTop = "1em";
    return formComponent.render(componentContainer);
});

let headerInfo = document.createElement("div");
headerInfo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in euismod arcu. Vivamus sit amet lacinia purus. Nulla a turpis ipsum. Maecenas ante erat, iaculis ac hendrerit non, accumsan quis neque. Nullam et congue quam. Quisque luctus egestas gravida. Quisque maximus, diam non vehicula imperdiet, nunc purus dapibus est, eu efficitur orci dolor eu turpis.";
headerInfo.classList.add("landing-page-header");

let landingPage = document.querySelector("#landing");
let landingPageButtonContainer = document.createElement("div");

landingPageButtonContainer.classList.add("lotto-star-container");
lsSubmitFormButton.render(landingPageButtonContainer);
landingPage.appendChild(headerInfo);
formContainers.forEach(formContainer=>landingPage.appendChild(formContainer));
landingPage.appendChild(landingPageButtonContainer);
