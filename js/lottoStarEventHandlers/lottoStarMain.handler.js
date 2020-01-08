import MessageSubmitted from "../lottoStarComponents/lottoStarMessageSubmitted.component.js";
let eventHandlers = {};

eventHandlers.onFormSubmit = function(event,componentContainer){
    [...componentContainer.childNodes].forEach(childNode=>childNode.remove());
    let messageComp = new MessageSubmitted("YOUR ANSWER HAS BEEN SUBMITTED");
    messageComp.render(componentContainer);

};

export default eventHandlers;