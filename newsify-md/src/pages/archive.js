
import categoryMenu from '../components/category.js';
import { initSwipe } from '../utilities/swipe.js';


export default function archivePage() {
    
    const fragment = document.createDocumentFragment();

    const sectionElm = document.createElement("section");
    fragment.append(sectionElm);


    const navElm = document.createElement("nav");
    sectionElm.append(navElm);
    
    // function isCategoryEnabled(categoryKey) {
    //     const saved = localStorage.getItem(categoryKey);
    //     return saved === null || saved === 'true';
    //     //Er saved null? (det betyder, at vi ikke har gemt noget i localStorage, så vi skal vise kategorien, da udtrykket så er true)
    // }

    const ulElm = document.createElement("ul");
    navElm.append(ulElm);
    // Append hvert komponent, såfremt/if kategorien er aktiveret / ikke er false:
    if (localStorage.getItem("artsEnabled") !== 'false') {
        ulElm.append(categoryMenu("arts", "#archive"));
    }
          
    if (localStorage.getItem("healthEnabled") !== 'false') {
        ulElm.append(categoryMenu("health", "#archive"));
    }
          
    if (localStorage.getItem("sportsEnabled") !== 'false') {
        ulElm.append(categoryMenu("sports", "#archive"));
    }
          
    if (localStorage.getItem("technologyEnabled") !== 'false') {
        ulElm.append(categoryMenu("technology", "#archive"));
    }
          
    if (localStorage.getItem("travelEnabled") !== 'false') {
        ulElm.append(categoryMenu("travel", "#archive"));
    }

     initSwipe(ulElm);

  return fragment;
}