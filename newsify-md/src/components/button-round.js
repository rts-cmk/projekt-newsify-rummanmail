
import './button-round.scss';

export default function button(classes, btnText) {
    let buttonElm = document.createElement("button")
    buttonElm.className = `${classes}`; //List.add("btnDarkMode", "btnSkip", "btnSignIn", "btnContinue");

    buttonElm.innerHTML = `
        ${btnText}
    `

    return buttonElm
}