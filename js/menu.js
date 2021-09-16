const menuButton = document.querySelector(".menu-button");
const container = document.querySelector(".container")
const menu = document.querySelector(".menu-container")

menuButton.addEventListener('click', () => {
  container.classList.toggle("open");
  if(menu.style.visibility==="visible"){
    menu.style.visibility="hidden";
    menu.style.opacity=0;
  }else{
    menu.style.visibility="visible";
    menu.style.opacity=1;
  }
})

