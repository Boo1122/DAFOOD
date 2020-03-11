const app = {
    pages: [],
    show: new Event('show'),
    init: function() {
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg)=>{
            pg.addEventListener("show", app.pageShown);
        })

        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener("click", app.nav);

        }) 

         history.replaceState({}, 'Home', '#home');
         window.addEventListener('popstate', app.poppin)
    },
    nav: function(ev) {
        ev.preventDefault();
        console.log(ev.target)
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        history.pushState({}, currentPage, `${currentPage}`)
        document.getElementById(currentPage).dispatchEvent(app.show);

    },

        pageShown: function(ev) {
            console.log('page', ev.target.id, 'just shown' );
            let title = ev.target.querySelector('title')
            h1.classList.add('big'); 
            setTimeout((h)=> {
                h.classList.remove('big')
            }, 1000, h1);

    },

    poppin: function(ev) {
        console.log(location.hash, 'popstate event');
        let hash = location.hash.replace('#', '')
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        document.getElementById(hash).dispatchEvent(app.show);

    }
}

    document.addEventListener('DOMContentLoaded', app.init);