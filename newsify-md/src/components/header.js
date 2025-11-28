import logo from '../imgs/newsify_logo.svg';
import './header.scss';

export default function header(route = "") {
    let headerElm = document.createElement("header");
    headerElm.className = "header";

    let dynamicHeadline = "";

    if (route === "#settings") {
      dynamicHeadline = `<div class="dynamic-headline">
                            <h2>Settings</h2>
                            <h3>Categories</h3>
                         </div>`;
    }
    
    // Og så:
    headerElm.innerHTML = `
      <div class="logo"><img src="${logo}" alt="newsify logo">
      <h1>Newsify</h1></div>
      ${dynamicHeadline}
    `;

    return headerElm;
}
