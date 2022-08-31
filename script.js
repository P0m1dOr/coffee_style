/*var button = document.querySelector('.x-logo');
var sidebar = document.querySelector('.sidebar-cart');
var cart = document.querySelector(".cart");
cart.addEventListener('click', function() {
    sidebar.classList.add("show");
    console.log('click'); 
});
button.addEventListener('click', function() {
    sidebar.classList.remove("show");
    
});
*/
$(document).ready(function(){
    $(".x-logo").click(function(){
      $(".sidebar-wrapper").hide(400);
    });
    $(".cart").click(function(){
        $(".sidebar-wrapper").show(400);

    });
    $(".tablet-menu").click(function(){
        $("nav ul").slideToggle(400);
    });
});
