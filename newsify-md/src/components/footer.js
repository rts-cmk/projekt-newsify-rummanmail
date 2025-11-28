
import './footer.scss';



export function highlightActiveFooterIcon() {
    const currentRoute = window.location.hash || "#home";
    const footerLinks = document.querySelectorAll("footer a");

    footerLinks.forEach(link => {
        if (link.dataset.route === currentRoute) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}



export default function footer() {
    let footerElm = document.createElement("footer")
    footerElm.className="footer"

    footerElm.innerHTML = `
          <nav class="footer-nav">
            <ul>
                <li><a href="#home" data-route="#home"><i class="fa-solid fa-house"></i><span>Home</span></a></li>
                <li><a href="#archive" data-route="#archive"><i class="fa-regular fa-bookmark"></i><span>Arhcive</span></a></li>
                <li><a href="#popular" data-route="#popular"><i class="fa-regular fa-star"></i><span>Popular</span></a></li>
                <li><a href="#settings" data-route="#settings"><i class="fa-solid fa-gear"></i><span>Settings</span></a></li>
            </ul>
        </nav>
    `

    return footerElm
}