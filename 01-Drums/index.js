


window.addEventListener('keydown',(event)=>{
    const audio = document.querySelector(`audio[data-key = "${event.keyCode}" ]`);
    const key = document.querySelector(`.key[data-key = "${event.keyCode}" ]`);

            if(!audio) return ;
            audio.currentTime = 0 ;
            audio.play();
            key.classList.add("playing") ;

})

window.addEventListener('keyup',(event)=>{

    const keye = document.querySelector(`.key[data-key = "${event.keyCode}" ]`);
            if(!keye) return ;
            keye.classList.remove("playing") ;
})
