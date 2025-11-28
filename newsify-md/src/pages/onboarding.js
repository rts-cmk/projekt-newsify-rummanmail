import './onboarding.scss';

import onboardingImg1 from '../imgs/onboarding/onboarding1.png';
import onboardingImg2 from '../imgs/onboarding/onboarding2.png';
import onboardingImg3 from '../imgs/onboarding/onboarding3.png';

const onboardingData = [
    {
        img: onboardingImg1,
        headline: "Stay Connected, <br> Everywhere, Anytime",
        text: "Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content."
    },
    {
        img: onboardingImg2,
        headline: "Become a Savvy <br> Global Citizen.",
        text: "Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!"
    },
    {
        img: onboardingImg3,
        headline: "Enhance your News <br> Journey Now!",
        text: "Be part of our dynamic community and contribute your insights and participate in enriching conversations."
    },
];

let currentStep = 0;

export default function onboarding() {
    const sectionOnboardingElm = document.createElement("section");
    sectionOnboardingElm.className = "sectionOnboarding";

    const updateOnboardingContent = () => {
        sectionOnboardingElm.innerHTML = `
            <img class="phoneImg" src="${onboardingData[currentStep].img}" alt="illustrative picture">
            <div class="onboarding-info">
                <h1>${onboardingData[currentStep].headline}</h1>
                <p>${onboardingData[currentStep].text}</p>
                <div class="advanced-icons">
                    ${onboardingData.map((_, index) =>`
                        <span class="${index === currentStep ? 'active' : ''}"  data-index="${index}"></span>
                        `).join('')}
                </div>
                <button class="btnSkip">Skip</button>
                <button class="btnContinue">Continue</button>
            </div>
        `;
        
        // Tilføj event listeners igen
        const skipBtn = sectionOnboardingElm.querySelector('.btnSkip');
        const continueBtn = sectionOnboardingElm.querySelector('.btnContinue');
        const icons = sectionOnboardingElm.querySelectorAll('.advanced-icons span'); 
        
        skipBtn.addEventListener('click', () => {
            location.hash = 'login'; // Skip til login
        });
        
        continueBtn.addEventListener('click', () => {
            if (currentStep < onboardingData.length - 1) {
                currentStep++;
                updateOnboardingContent(); // Opdater indholdet til næste step
            } else {
                location.hash = 'login'; // Når sidste trin er nået, gå til login
            }
        });

            // Tilføj event listeners til ikon-spans
            icons.forEach(icon => {
                icon.addEventListener('click', (event) => {
                    const index = parseInt(event.target.dataset.index, 10); // Hent index fra data-attribute
                    currentStep = index;
                    updateOnboardingContent(); // Opdater indholdet for det valgte step
                });
            });
    }

    // Initialt onboarding indhold
    updateOnboardingContent();

    return sectionOnboardingElm;
}
