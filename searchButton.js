

let search = document.getElementById("search").addEventListener("click", function(event){
    if(event.key === "Enter") {
        const searchValue = event.target.value;

const menu = document.getElementsById("menu")
    for(let elements of menu) {
        const textMenu = elements.innerText;
        // const menuId = menu.parentNode.parentNode.parentNode.id;

    if(textMenu.includes(searchValue)) {
        console.log("includes")
             }        
        }
    }
})


