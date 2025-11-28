import newsifyWelcome from "../components/welcome-login";
import button from '../components/button-round.js';
import './login.scss';

export default function login() {

    const fragment = document.createDocumentFragment();

    const sectionElm = document.createElement("section");
    sectionElm.className = "loginpage__section"
    fragment.append(sectionElm);

    sectionElm.append(newsifyWelcome());

    sectionElm.append(button("btnSignIn", "Continue with Facebook"));
    sectionElm.append(button("btnSignIn", "Continue with Google"));

//// or opdelings element //////

    sectionElm.append(button("btnContinue", "Sign in with password"));




    const divElm = document.createElement("div");
    divElm.className = "createAccount-link";
    divElm.innerHTML = `
    <p><a href="#signUp">Don't have an account? Sign up</a></p>
    <p><a  class="skip-signIn" href="#home">No thanks! Skip sign in</a></p>
    `;
    sectionElm.append(divElm);


//// <p>Don't have an account? <span>Sign up</span> </p>"

    return fragment;
}


