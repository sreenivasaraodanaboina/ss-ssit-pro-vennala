const hamburger = document.querySelector(".hamburger");
const closebtton = document.querySelector(".close-button");
const sidebarcontainerr= document.querySelector(".sidebar-container");


function sidescroll() {
    hamburger.addEventListener("click",function (){
        sidebarcontainerr.classList.add("stickey-sidebar")
    })
    closebtton.addEventListener("click",function (){
        sidebarcontainerr.classList.remove("stickey-sidebar")
    })
    
}
sidescroll()
function sri() {
    

const navcontainer=document.querySelector(".nav-container");
window.addEventListener("scroll",function(){
    let scrollnumber=window.scrollY
    let targetnumber=window.innerWidth>=992 ? 70 : 50;
    if (scrollnumber>=targetnumber) {
        navcontainer.classList.add("stickey-nav")
    }
        else{
            navcontainer.classList.remove("stickey-nav")  
        }
        
    
})
}
sri()