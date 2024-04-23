let MyUL = document.getElementById('my-ul');
let Li = document.querySelector('li');



MyUL.addEventListener("click", function (e) {

    console.log("UL is clicked");
},true)

Li.addEventListener("click" , function(e){
    
    console.log("Li is clicked");
  
})