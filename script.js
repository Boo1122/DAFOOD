function HomeButton(){
  document.getElementById("home").addEventListener("click", function(){
    console.log("Lol");
    window.location.href = "/MealsByCountry.html";
  })
  }
if (location.href == "./Meals by country.html"){
  generateFlagPage();
}

  function generateFlagPage(){
    const flagPage = document.createElement("div");
    flagPage.classList.add("flag-page");
    flagPage.id = "flag-page";
    document.body.appendChild(flagPage);

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

    const flagShortName = ["fr.png", "gb.png", "us.png"];
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
 
  HomeButton();
  }

  function clickOnFlag(){
    document.getElementById("flags").addEventListener("click", generateMealPage)
    
  }
  function generateMealPage(event) {
    console.log("generating meal page");
    highlightMealButton();
    hideHomePage();
    getMealsFromServer(event.target.innerText);
  }
  
HomeButton();
