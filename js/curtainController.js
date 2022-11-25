CURTAIN_STATE = true

function curtainUp(){
    let menu = document.getElementById('menu');
    menu.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener('wheel', (ev) => {
    if(CURTAIN_STATE && ev.deltaY > 0) {
        curtainUp();
        CURTAIN_STATE = false;
    }
})

window.onscroll = function() {
    manageCurtain();
    manageMenu();
}

function manageCurtain(){
    let curtain = document.getElementById('landing-page');

    if(curtain){
        let menu = document.getElementById('menu');
        let firstSection = document.getElementById('first-section');
        console.log('KURWA: ' + curtain.getBoundingClientRect().bottom);
      if(curtain.getBoundingClientRect().bottom <= 0) {
           menu.style.position = "fixed";
           firstSection.style.marginTop = "380px";
      }else{
           menu.style.position = "relative";
           firstSection.style.marginTop = "240px";
      } 
    }
}