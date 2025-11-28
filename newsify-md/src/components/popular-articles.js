// src/utils/renderArticles.js


export default function renderArticles(articles) {
    const mainElm = document.querySelector("main");
    if (!mainElm) return;

    mainElm.innerHTML = ""; // Ryd eksisterende indhold

    articles.forEach(article => {
        const articleElm = document.createElement("article");
        articleElm.className = "article";

        articleElm.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.abstract}</p>
            <a href="${article.url}" target="_blank">Læs mere</a>
        `;

        mainElm.append(articleElm);
    });
}
