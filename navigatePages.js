
function home() {
  
    for (const page of document.getElementsByClassName('page')) {
        const buttonId = page.id.split('-')[0];
        document.getElementById(buttonId).addEventListener("click", () => {
          for (const pageIn of document.getElementsByClassName('page')) {
            pageIn.classList.remove("show-page");
            pageIn.classList.add("hide-page");
          }
          page.classList.add("show-page");
          page.classList.remove("hide-page");
        });
      }
    
    } 
    
   
    function showFlags() {
    
      let meals2 = document.getElementById('meals2');
      meals2.addEventListener('click', () => {
        generateFlagPage();

      }, {once :true});
    
    } 

    
    function generateFlagPage(){
      let meals = document.getElementById('meals2-page');
      const flagPage = document.createElement("div");
      flagPage.classList.add("flag-page");
      flagPage.id = "flag-page";
      meals.appendChild(flagPage);
      addExplantion(flagPage);
      generateFlags(flagPage);
      }
       
    
      function addExplantion(flagPage){
        const explanation = document.createElement("h2");
        explanation.classList.add("explanation");
        explanation.innerText = "Choose a flag";
        explanation.style.textAlign = "center";
        flagPage.appendChild(explanation);
      }
    
      function generateFlags(flagPage){
    
        const flagShortName = ['/CountryFlags/mx.png', '/CountryFlags/pt.png', "/CountryFlags/fr.png", "/CountryFlags/gb.png", "/CountryFlags/us.png", "/CountryFlags/tn.png", "/CountryFlags/ar.png", '/CountryFlags/ca.png'];
        const flagContainer = document.createElement('div');
        flagContainer.classList.add("flag-Container");
        flagContainer.style.textAlign = "center";
        flagPage.appendChild(flagContainer);
    
        for (let index = 0; index < flagShortName.length; index++) {
          const img = document.createElement("img");
          img.id="flags"
          img.src=flagShortName[index];
          flagContainer.appendChild(img); 
          img.style.margin = "20px";
        }
     
 
    }
  home();

  showFlags();
  

 



