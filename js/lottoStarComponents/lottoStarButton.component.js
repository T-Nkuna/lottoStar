export default class LottoStarButton{

    constructor(text){
        this.text = text;
        this.htmlElement = document.createElement("button");
    }

    render(container){

        this.htmlElement.classList.add("lotto-star-button");
        this.htmlElement.innerHTML = this.text;
        container.appendChild(this.htmlElement);
        return container;
    }

    onClick(clickHandler){
        this.htmlElement.addEventListener("click",clickHandler);
    }
}