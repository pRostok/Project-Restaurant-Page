import loadContact from "./contact";
import loadHome from "./home";

function createHeader(){

    const header = document.createElement('header');
    header.classList.add('header');

    const img = document.createElement('img');
    img.classList.add('header__logo');

    header.appendChild(img);
    header.appendChild(createNav());

    return header;

}

function createNav() {

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const buttonHome = document.createElement('div');
    buttonHome.classList.add('nav__item');
    buttonHome.textContent = "Home";
    buttonHome.addEventListener('click', loadHome);

    const buttonContact = document.createElement('div');
    buttonContact.classList.add('nav__item');
    buttonContact.textContent = "Contact Us";
    buttonContact.addEventListener('click', loadContact);

    nav.appendChild(buttonHome);
    nav.appendChild(buttonContact);

    return nav; 
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('footer__section');
    const divAdr = document.createElement('div');
    divAdr.textContent = "dont mess with us";
    const divMail = document.createElement('a');
    divMail.setAttribute('src','mailto:support@gamil.com');
    divMail.textContent = "Just Don't";
    contactInfo.appendChild(divAdr);
    contactInfo.appendChild(divMail);

    footer.appendChild(contactInfo);

    
    return footer;
}

function createWebsite() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    loadHome();
}

createWebsite();