if (window.matchMedia("(max-width: 800px)").matches) {
    function openbtn() {
        let menu = document.getElementById("menu-res")
        let open = document.getElementById("hamburger")
        
            if (menu.style.display === "flex") {
                menu.style.display = "none"
                open.innerHTML = `<h1> <i class="fa-solid fa-bars"></i></h1>`
            }else{
                menu.style.display = "flex"
                open.innerHTML = `<h1><i class="fa-sharp fa-solid fa-x"></i></h1>`
            }
          
         }
    }

