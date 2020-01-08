export default class LottoStarButton{

    constructor(text,cssOptions={}){
        this.text = text;
        this.htmlElement = document.createElement("button");
        this.cssOptions = cssOptions;
    }

    render(container){

        this.htmlElement.classList.add("lotto-star-button");
        this.htmlElement.innerHTML = this.text;
        for(let propName in this.cssOptions)
        {
            this.htmlElement.style[propName] = this.cssOptions[propName];
        }
        container.appendChild(this.htmlElement);
        return container;
    }

    onClick(clickHandler){
        this.htmlElement.addEventListener("click",clickHandler);
    }
}