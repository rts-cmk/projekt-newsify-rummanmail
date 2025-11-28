import logo from "../imgs/newsify_logo.svg";
import './welcome-login.scss';

export default function newsifyWelcome() {
    let sectionElm = document.createElement("section")
    sectionElm.className="login-section"

    sectionElm.innerHTML = `
    
    <img class="logo-login" src="${logo}" alt="newsify logo">
    <h1 class="newsify">Newsify</h1>
    <p>Welcome! Let's dive into your account!</p>
    `
    return sectionElm
} 

