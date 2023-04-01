let panels = document.querySelectorAll(".panel");

const toggleOpen = (event) => {
  return event.currentTarget.classList.toggle("open");
};

const  toggleActive = (event) =>{
    console.log(event.propertyName) ;
    // return event.currentTarget.include ;
    if(event.propertyName.includes('flex')){
        event.currentTarget.classList.toggle("open-active")
    }
}

panels.forEach(panel => panel.addEventListener("click",toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend",toggleActive));
