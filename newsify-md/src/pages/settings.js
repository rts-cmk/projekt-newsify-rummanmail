import categoryMenu from '../components/category.js';
import button from '../components/button-round.js';
import '../components/button-round.scss';



export default function settingsPage() {
    
    const fragment = document.createDocumentFragment();

    const sectionElm = document.createElement("section");
    fragment.append(sectionElm);


    const navElm = document.createElement("nav");
    sectionElm.append(navElm);
        
/*          //switch on/off og gem i storage

         const switchInput = document.querySelector('.switch input');

         switchInput.addEventListener('change', function() {
            // Tjek om knappen er slået til (checked)
            let erAktiveret = switchInput.checked;
        
            // Gem det i localStorage, så vi kan huske det næste gang
            localStorage.setItem('travelEnabled', erAktiveret);
        })
        //SLUT switch on/off og gem i storage */


    const ulElm = document.createElement("ul");
    navElm.append(ulElm);
     // Append alle dine komponenter
     ulElm.append(categoryMenu("arts", window.location.hash));
     ulElm.append(categoryMenu("health", window.location.hash));
     ulElm.append(categoryMenu("sports", window.location.hash));
     ulElm.append(categoryMenu("technology", window.location.hash));
     ulElm.append(categoryMenu("travel", window.location.hash));


    const settingsArticle = document.createElement("article");
    settingsArticle.className = "settings-article";
    sectionElm.append(settingsArticle);

    settingsArticle.append(button("btnDarkMode", "Toggle dark mode"));

    // Go to log in knap/link
    const logInLink = document.createElement("a");
    logInLink.className = "logIn-link"
    logInLink.href = "#login";
    logInLink.setAttribute("data-route", "#login");
    logInLink.textContent = "Sign in or create account";

    settingsArticle.append(logInLink);

    return fragment;
}