
import './category.scss';
import logo from '../imgs/newsify_logo.svg';
import { fetchPopularData } from '../utilities/fetch-popular.js';
import { fetchlatestNews } from '../utilities/fetch-home.js';
//import '../utilities/swipe.js';

export default function categoryMenu(menuCategory, route) {
    const categoryElm = document.createElement("li");
    categoryElm.className = "category";

    let trailingElement;

    if (route === "#settings") {
        const key = `${menuCategory}Enabled`; // fx "sportsEnabled"

        const saved = localStorage.getItem(key);
        const savedState = saved === null || saved === 'true'; // default = true
        // Så: er saved null? (betyder, at vi ikke har gemt noget i localStorage, så vi skal vise kategorien, da udtrykket så er true)
        // Hvis savedState er true, vil checkboxen være markeret (checked). (Se koden i trailingElement)
        // Hvis savedState er false eller null, vil checkboxen ikke være markeret.
        trailingElement = `<label class="switch">
                               <input type="checkbox" ${savedState ? 'checked' : ''}>
                               <span class="slider round"></span>
                            </label>`;

     } else {
        trailingElement = `<button class="fetch-btn"><i class="fa-solid fa-chevron-right"></i></button>`;
    }

    categoryElm.innerHTML = `
        <img class="logo" src="${logo}" alt="newsify logo">
        <h4>${menuCategory}</h4> 
        ${trailingElement}
        <div class="articles-container"></div> <!-- container til denne kategori til at hente artikler ind i -->
    `;

    //switch on/off og gem i storage
    if (route === "#settings") {
        const switchInput = categoryElm.querySelector('.switch input');

        if (switchInput) {
            const key = `${menuCategory}Enabled`; // fx "sportsEnabled"

            switchInput.addEventListener('change', function() {
                const erAktiveret = switchInput.checked;
            localStorage.setItem(key, erAktiveret);
            });
        }
}
    //SLUT switch on/off og gem i storage

    const button = categoryElm.querySelector('.fetch-btn');
    const articlesContainer = categoryElm.querySelector('.articles-container');

    if (button) {
        button.addEventListener("click", async () => {
            button.classList.toggle("clicked");  // Når knappen klikkes, toggle klassen 'clicked'
            //tager kategorien og gør lowercase for så vi kan matche det med API'ets eller cache'ns keys,
            // og dermed hente ud fra disse kategorier.
            const key = menuCategory.toLowerCase();
            
            
            // Hvis der allerede er hentet artikler, toggle visning
            if (articlesContainer.innerHTML.trim() !== "") {
                articlesContainer.classList.toggle('hidden');
                return;
            }

            // Fetch artikler
            let articles;
            if (route === "#popular") {
                articles = await fetchPopularData(key);
            } else if (route === "" || route === "#home") {
                articles = await fetchlatestNews(key); 
            } else if (route === "#archive") {
                const savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];
                // Filtrér kun artikler der matcher den aktuelle kategori
                articles = savedArticles.filter(article => article.category === key);
            } else {
                console.warn("Ukendt route, ingen fetch udført");
                return;
            }
            

            console.log("Fetched articles for", key, articles);

           
            
            // Render artikler
            articles.forEach(article => {
                const articleElm = document.createElement("article");
                articleElm.className = "article";
                articleElm.dataset.category = key; // Tilføj kategori som data-attribut
               // articleElm.dataset.image = imageUrl || "";
               
                const imageUrl = article.image || article.multimedia?.[0]?.url || "fallback.jpg";

                articleElm.innerHTML = `
                <a href="${article.url}" target="_blank">
                    <img class="article-img" src="${imageUrl}" alt="article image">
                    <h3>${article.title}</h3>
                    <p>${article.abstract}...</p>
                </a>
                `;
                articlesContainer.append(articleElm);
            });
        });
    }

    return categoryElm;
}


