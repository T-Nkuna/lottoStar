import LottoStarForm from "./LottoStarForm.component.js";
import LottoStarButton from "./lottoStarButton.component.js";
import DigitBlocks from "./digitBlocks.component.js";
import formEventHandler from "../lottoStarEventHandlers/lottoStarMain.handler.js"

export default class LottoStarMain
{
    constructor(){

    }

    render(container){
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
        
        let lsSubmitFormButton = new LottoStarButton("SUBMIT NOW",{backgroundColor:"#5C006A"});
        let learnMoreButton = new LottoStarButton("Learn More",{backgroundColor:"#5C006A"});
        lsSubmitFormButton.onClick((event)=>{
           formEventHandler.onFormSubmit(event,landingPageMainContent1);
        });
        
        
        let formContainers = [lsForm,lsForm2].map(formComponent=>{
            let componentContainer = document.createElement("div");
            componentContainer.style.marginTop = "1em";
            return formComponent.render(componentContainer);
        });
        
        let headerInfo = document.createElement("div");
        headerInfo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in euismod arcu. Vivamus sit amet lacinia purus. Nulla a turpis ipsum. Maecenas ante erat, iaculis ac hendrerit non, accumsan quis neque. Nullam et congue quam. Quisque luctus egestas gravida. Quisque maximus, diam non vehicula imperdiet, nunc purus dapibus est, eu efficitur orci dolor eu turpis.";
        headerInfo.classList.add("landing-page-header");
        
        let landingPageMainContent1 = document.createElement("div");
        let landingPageMainContent2 = document.createElement("div");
        let landingPageMainButtonContainer = document.createElement("div");
        let landingPageMainContent2Inner = document.createElement("div");
        landingPageMainButtonContainer.classList.add("lotto-star-container");
        lsSubmitFormButton.render(landingPageMainButtonContainer);
        landingPageMainContent1.appendChild(headerInfo);
        formContainers.forEach(formContainer=>landingPageMainContent1.appendChild(formContainer));
        landingPageMainContent1.appendChild(landingPageMainButtonContainer);
        landingPageMainContent1.classList.add("lotto-star-main-content-container");
        landingPageMainContent2Inner.classList.add(
            "lotto-star-main-content-container-bottom"
        );
        landingPageMainContent2.classList.add(
            "lotto-star-main-content-container",
            "lotto-star-dark-shadow"
        );
        landingPageMainContent2.appendChild(landingPageMainContent2Inner);
        container.appendChild(landingPageMainContent1);
        container.appendChild(landingPageMainContent2);
        
        let num = "R"+Math.floor(Math.random()*1000000);
        let digitBlocks = new DigitBlocks(num);
        let digitContainer = document.createElement("div");
        let charityCircle = document.createElement("div");
        let raisedForCharityLabel = document.createElement("div");
        let learnMoreContainer = document.createElement("div");

        learnMoreButton.render(learnMoreContainer);
        learnMoreContainer.classList.add("learn-more-container");
        raisedForCharityLabel.innerHTML = "RAISED FOR CHARITY";
        raisedForCharityLabel.classList.add("raised-for-charity-label");
        digitContainer.classList.add("charity-digit-container");
        charityCircle.classList.add("lotto-star-charity-circle");
        landingPageMainContent2Inner.append(charityCircle);
        landingPageMainContent2Inner.append(raisedForCharityLabel);
        landingPageMainContent2Inner.append(digitContainer);
        landingPageMainContent2Inner.append(learnMoreContainer);

         learnMoreContainer.querySelectorAll(".lotto-star-button")
         .forEach(lsButton=>{
             lsButton.classList.add("lotto-star-small-button","lotto-star-top-margin");
            lsButton.style.fontSize="0.833em";
            lsButton.style.padding ="0.25em 0.5em";
         });

         let bottomText = document.createElement("p");
         bottomText.innerHTML = "CORPORATE SOCIAL RESPONSIBILITY TOTAL CONTRIBUTIONS";
         bottomText.classList.add("lotto-star-small-text");
         learnMoreContainer.appendChild(bottomText);
        digitBlocks.render(digitContainer);

        return container;
    }
}
