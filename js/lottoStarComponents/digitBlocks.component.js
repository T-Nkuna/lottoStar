export default class DigitBlocks
{
    constructor(alphanumericString){
        this.digits = [...alphanumericString];
    }

    render(container){
        
        container.classList.add("lt-digit-container");
        this.digits.forEach(digit=>{
            let digitBlock = document.createElement("div");
            digitBlock.innerHTML = digit;
            digitBlock.classList.add("lt-digit-block");
            container.appendChild(digitBlock);
        });
        return container;
    }
}