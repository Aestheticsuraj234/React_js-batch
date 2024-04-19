let body = document.querySelector('body')

let button = document.querySelector('button')

let isDarkMode = true;


button.addEventListener("click" ,function(){
    if(isDarkMode){
        body.classList.add("light")
        body.classList.remove("dark");
        isDarkMode = false
    }   
    else
    {
        body.classList.add("dark")
        body.classList.remove("light");
        isDarkMode = true
    }
} )