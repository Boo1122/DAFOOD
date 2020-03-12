// const app = {
//     pages: [],
//     show: new Event('show'),
//     init: function() {
//         app.pages = document.querySelectorAll('.page');
//         app.pages.forEach((pg)=>{
//             pg.addEventListener('show', app.pageShown);
//         })

//         document.querySelectorAll('.nav-link').forEach((link)=>{
//             link.addEventListener('click', app.nav);
//         })


//         history.replaceState({}, 'Home', '#home')
//         window.addEventListener('popstate', app.poppin)
//     },    

//     nav: function(ev) {
//         ev.preventDefault();
//         // console.log(ev.target)
//         let currentPage = ev.target.getAttribute('data-target');
//         document.querySelector('.active').classList.remove('active');
//         document.getElementById(currentPage).classList.add('active');
//         history.pushState({}, currentPage, `${currentPage}`);
//         document.getElementById(currentPage).dispatchEvent(app.show)

//     }, 

//     pageShown: function(ev) {
//         console.log('page', ev.target.id, 'just shown' );
//         let title = ev.target.querySelector('active')


//     },
//     poppin: function(ev) {
//         console.log(location.hash, 'popstate event');
//         let hash = location.hash.replace('#', '');
//         document.querySelector('.active').classList.remove('active');
//         document.getElementById(hash).classList.add('active');
//         document.getElementById(hash).dispatchEvent(app.show);
//     }

// }

// document.addEventListener('DOMContentLoaded', app.init);



window.onhashchange = function () {
    render(window.location.hash);
}

function render(hashKey) {
    let page = document.querySelectorAll('.page');
    for (let i = 0; i < page.length; i++) {
        page[i].style.display = 'none';

    }
}


switch (hashKey) {
    case "":
        page[0].style.display = 'block';
        break;

    case "#home":
        page[0].style.display = 'block';
        document.getElementById('home').classList.add('active')
        break;

    case "#contact":
        page[0].style.display = 'block';
        document.getElementById('contact').classList.add('active')
        break;

    case "#about-us":
        page[0].style.display = 'block';
        document.getElementById('about-us').classList.add('active')
        break;

    case "#meals-by-name":
        page[0].style.display = 'block';
        document.getElementById('meals-by-name').classList.add('active')
        break;

    case "#meals-by-country":
        page[0].style.display = 'block';    
        document.getElementById('meals-by-country').classList.add('active')
        break;

    default: 
        page[0].style.display = 'block';    
        document.getElementById('home').classList.add('active')

}