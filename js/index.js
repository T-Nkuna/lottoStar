import LottoStarForm from "./lottoStarComponents/LottoStarForm.component.js";
import LottoStarButton from "./lottoStarComponents/lottoStarButton.component.js";
import DigitBlocks from "./lottoStarComponents/digitBlocks.component.js";
let lsForm = new LottoStarForm("NAME ONE LOTTERY GAME YOU CAN BET ON AT <span class='lotto-star-gold'>LOTTOSTAR.CO.ZA</span>",[
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
        name:"Accept <span class='lotto-star-gold'>TS & C'S</span>"
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

let landingPage =  document.querySelector("#landing");
let landingPageMainContent1 = document.createElement("div");
let landingPageMainContent2 = document.createElement("div");
let landingPageMainButtonContainer = document.createElement("div");

landingPageMainButtonContainer.classList.add("lotto-star-container");
lsSubmitFormButton.render(landingPageMainButtonContainer);
landingPageMainContent1.appendChild(headerInfo);
formContainers.forEach(formContainer=>landingPageMainContent1.appendChild(formContainer));
landingPageMainContent1.appendChild(landingPageMainButtonContainer);
landingPageMainContent1.classList.add("lotto-star-main-content-container");
landingPageMainContent2.classList.add(
    "lotto-star-main-content-container",
    "lotto-star-dark-shadow",
    "lotto-star-main-content-container-bottom"
);
landingPage.appendChild(landingPageMainContent1);
landingPage.appendChild(landingPageMainContent2);

let num = "R"+Math.floor(Math.random()*1000000);
let digitBlocks = new DigitBlocks(num);
let digitContainer = document.createElement("div");
let charityCircle = document.createElement("div");
digitContainer.classList.add("charity-digit-container");
charityCircle.classList.add("lotto-star-charity-circle");
landingPageMainContent2.append(charityCircle);
landingPageMainContent2.append(digitContainer);
digitBlocks.render(digitContainer);
