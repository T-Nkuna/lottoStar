import LottoStarButton from "./lottoStarButton.component.js";

export default class MessageSubmitted{

    constructor(successMessage){
        this.successMessage = successMessage;
    }

    render(componentContainer){
        componentContainer.innerHTML = "";
        componentContainer.style.textAlign = "center";
        let messageContainer = document.createElement("div");
        messageContainer.style.color = "#FFDD00";
        messageContainer.style.marginTop ="2em";
        messageContainer.innerHTML = this.successMessage;
        
        let extraTextContainer = document.createElement("div");
        extraTextContainer.innerHTML ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in euismod arcu. Vivamus sit amet lacinia purus. Nulla a turpis ipsum.";
        extraTextContainer.style.margin ="1em";
        let buttonModels = [
            {
            text:"REGISTER & BET NOW",
            backgroundColor:"#00AEEF",
            color:"#32023A"
            },
            {
            text:"LOGIN & BET NOW",
            backgroundColor:"#FFDD00",
            color:"#32023A"
        }];
    
        let tempContainer = document.createElement("div");
        let btnElements = buttonModels.map(btnRec=>{
           let btn = new LottoStarButton(btnRec.text,{backgroundColor:btnRec.backgroundColor});
           btn.render(tempContainer);
           btn.htmlElement.style.backgroundColor = btnRec.backgroundColor;
           btn.htmlElement.style.marginRight = "0.5em";
           btn.htmlElement.style.color = btnRec.color;

           return btn.htmlElement;
        });

        [messageContainer,extraTextContainer,...btnElements].forEach(ele=>componentContainer.appendChild(ele));
        
    }
}