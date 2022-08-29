var button = document.querySelector('.x-logo');
var sidebar = document.querySelector('.sidebar-cart');
var cart = document.querySelector(".cart");
cart.addEventListener('click', function() {
    sidebar.classList.add("show");
    console.log('click'); 
});
button.addEventListener('click', function() {
    sidebar.classList.remove("show");
    
});
