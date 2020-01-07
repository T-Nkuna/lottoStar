import LottoStarMain from "./lottoStarComponents/lottoStarMain.component.js"

let appContainer = document.querySelector("#landing");
let lottStarMainComponent = new LottoStarMain();
lottStarMainComponent.render(appContainer);