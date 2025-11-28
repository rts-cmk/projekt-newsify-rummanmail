import '../components/category.js';

export function initSwipe(parent) {
    // Find alle elementerne .category inde i det angivne parent-element.
    // Disse elementer repræsenterer hver deres kategori, som vi vil tilføje swipe-funktionalitet til.
    const containers = parent.querySelectorAll(".articles-container");
    if (!containers.length) {
        console.warn("No .category elements found for swipe");
        return;
    }

    const isArchive = window.location.hash === "#archive"; // tjek om vi er på archived

    // const isArchive = false;

    containers.forEach(container => {
        let initialX;
        let currentX;
        let movedX;

        const bookmarkIcon = document.createElement("span");
        bookmarkIcon.innerHTML = `<i class="fa-regular fa-bookmark"></i>`;
        bookmarkIcon.style.position = "absolute";
        bookmarkIcon.style.top = "1.5em";
        bookmarkIcon.style.right = "2em";


        container.addEventListener("pointerdown", startTouch);
        container.addEventListener("pointermove", moveTouch);
        container.addEventListener("pointerup", endTouch);


        function startTouch(event) {
            // console.log(isArchive)

            //event.preventDefault();
            initialX = event.clientX;
            console.log("Swipe started at:", initialX);
            event.target.closest("a").classList.remove("animate");

            event.target.closest(".article").style.backgroundColor = isArchive ? "#8B0000" : "#4D861F";
            bookmarkIcon.innerHTML = isArchive
                ? `<i class="fa-solid fa-trash"></i>`
                : `<i class="fa-regular fa-bookmark"></i>`;
        }

        function moveTouch(event) {
            currentX = event.clientX
            movedX = currentX - initialX;
            //tjek om den er favorit

            if (movedX < 0) {
                event.target.closest("a").style.left = movedX + "px";
            }
            if (movedX < -100) {
                event.target.closest(".article").append(bookmarkIcon);
            } else if (event.target.closest(".article").contains(bookmarkIcon))
                event.target.closest(".article").removeChild(bookmarkIcon);
        }

        function endTouch(event) {
            if (movedX < -100) {

                if (isArchive) {
                    //SLET FRA LOCAL STORAGE
                    const articleEl = event.target.closest(".article");
                    const url = articleEl.querySelector("a")?.href;
                    
                    // 1. Hent nuværende artikler
                    let savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];
                    
                    // 2. Filtrér artiklen fra (baseret på URL)
                    savedArticles = savedArticles.filter(article => article.url !== url);
                    
                    // 3. Gem det opdaterede array
                    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
                    console.log("Artikel slettet fra arkiv:", url);
                    
                    // 4. Fjern artiklen fra DOM'en
                    articleEl.remove();

                } else {
                    //vise element bookmark

                    // gemmelogik her
                    const articleEl = event.target.closest(".article");

                    const title = articleEl.querySelector("h3")?.textContent;
                    const url = articleEl.querySelector("a")?.href;
                    const abstract = articleEl.querySelector("p")?.textContent;
                    const image = articleEl.querySelector("img")?.src;
                    const category = articleEl.dataset.category || "unknown";

                    const articleData = { title, url, abstract, image, category };

                    // Hent eksisterende gemte artikler eller lav en tom array
                    const savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];

                    // tjek om artiklen allerede findes og hvis ikke,
                    // så push data'en/artiklen til dataarrayet og
                    // gem i localstorage
                    const alreadySaved = savedArticles.some(article => article.url === url);
                    if (!alreadySaved) {
                        savedArticles.push(articleData);
                        localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
                        console.log("Artikel gemt:", articleData);
                    } else {
                        console.log("Artikel findes allerede.");
                    }
                    //gemme-logik slut

                }
            }

            initialX = undefined;
            if (event.target.closest(".article").contains(bookmarkIcon))
                event.target.closest(".article").removeChild(bookmarkIcon);
            event.target.closest("a").classList.add("animate");
            event.target.closest("a").style.left = "0px"; //var -100px før

            // hvis man vil lave det så den ikke falder tilbage selv:
            // if(movedX > 100) {
            //     event.target.closest(".article").style.left = "0px";
            // }


        }

    });
}




//containers.addEventListener("pointerdown", startTouch);
//containers.addEventListener("pointermove", moveTouch);
//containers.addEventListener("pointerup", endTouch);





