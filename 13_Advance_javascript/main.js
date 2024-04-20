let MyUL = document.getElementById('my-ul');
let Li = document.querySelector('li');



MyUL.addEventListener("click", function (e) {

    console.log("UL is clicked");
})

Li.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Li is clicked");
}); 

