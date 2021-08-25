const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navMobileBtn = $('.main-menu .nav-mobile-btn');
const navOverlayElement = $('.main-menu .nav-overlay');
const navMobileClose = $('.main-menu .nav-mobile-close');
const mainNavbarsElement = $('.main-menu .navbars');


function addShowClass (elementClick) {
    elementClick.onclick = (e) => {
        navOverlayElement.classList.toggle('show');
        mainNavbarsElement.classList.toggle('show');
    }
}

addShowClass(navMobileBtn);
addShowClass(navMobileClose);
addShowClass(navOverlayElement);

// Menu Main Search
const mainMenuSeach = $('.main-menu .nav-search-btn');
const mainSeachInput = $('.main-menu .search-input');
const mainSeachClose = $('.main-menu .nav-search-close');

mainMenuSeach.onclick = (e) => {
    mainSeachInput.classList.add('show');
    mainSeachClose.classList.add('show');
    mainMenuSeach.classList.remove('show');
    mainSeachInput.focus();
}

mainSeachClose.onclick = (e) => {
    mainSeachInput.classList.remove('show');
    mainSeachClose.classList.remove('show');
    mainMenuSeach.classList.add('show');
}
