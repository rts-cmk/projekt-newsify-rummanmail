
import categoryMenu from '../components/category.js';
import { initSwipe } from '../utilities/swipe.js';


export default function homePage() {
    
    const fragment = document.createDocumentFragment();

    const sectionElm = document.createElement("section");
    fragment.append(sectionElm);


    const navElm = document.createElement("nav");
    sectionElm.append(navElm);

    const ulElm = document.createElement("ul");
    navElm.append(ulElm);
     // Append alle dine komponenter
    //  ulElm.append(categoryMenu("arts", "#home"));
    //  ulElm.append(categoryMenu("health", "#home"));
    //  ulElm.append(categoryMenu("sports", "#home"));
    //  ulElm.append(categoryMenu("technology", "#home"));
    //  ulElm.append(categoryMenu("travel", "#home"));

        // Hvis kategori er aktiveret, så vis den
    if (localStorage.getItem("artsEnabled") !== 'false') {
        ulElm.append(categoryMenu("arts", "#home"));
    }
     
    if (localStorage.getItem("healthEnabled") !== 'false') {
        ulElm.append(categoryMenu("health", "#home"));
    }
     
    if (localStorage.getItem("sportsEnabled") !== 'false') {
        ulElm.append(categoryMenu("sports", "#home"));
    }
     
    if (localStorage.getItem("technologyEnabled") !== 'false') {
        ulElm.append(categoryMenu("technology", "#home"));
    }
     
    if (localStorage.getItem("travelEnabled") !== 'false') {
        ulElm.append(categoryMenu("travel", "#home"));
    }


    //Kald swipefunktion på ulElm'erne:
    initSwipe(ulElm);

    return fragment;
}
