
import categoryMenu from '../components/category.js';
import { initSwipe } from '../utilities/swipe.js';


export default function popularPage() {
    
    const fragment = document.createDocumentFragment();

    const sectionElm = document.createElement("section");
    fragment.append(sectionElm);


    const navElm = document.createElement("nav");
    sectionElm.append(navElm);

    const ulElm = document.createElement("ul");
    navElm.append(ulElm);
     // Append alle dine komponenter

    // Hvis kategori er aktiveret, så vis den
    if (localStorage.getItem("artsEnabled") !== 'false') {
        ulElm.append(categoryMenu("arts", "#popular"));
    }

    if (localStorage.getItem("healthEnabled") !== 'false') {
        ulElm.append(categoryMenu("health", "#popular"));
    }

    if (localStorage.getItem("sportsEnabled") !== 'false') {
        ulElm.append(categoryMenu("sports", "#popular"));
    }

    if (localStorage.getItem("technologyEnabled") !== 'false') {
        ulElm.append(categoryMenu("technology", "#popular"));
    }

    if (localStorage.getItem("travelEnabled") !== 'false') {
        ulElm.append(categoryMenu("travel", "#popular"));
    }

     //Kald swipefunktion på ulElm'erne:
     initSwipe(ulElm);

    return fragment;
}
