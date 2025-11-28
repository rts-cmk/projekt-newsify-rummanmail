import logo from '../imgs/newsify_logo.svg';
import './splash.scss';

export default function splash() {
    let splashElm = document.createElement("section")
    splashElm.className="splash-section"

    splashElm.innerHTML = `
    <img class="logo" src=${logo} alt="newsify logo">
    <h1>Newsify</h1>
    `

    // Skift route efter animation
    setTimeout(() => {
        window.location.hash = "#onboarding";
    }, 2900);

    return splashElm
}