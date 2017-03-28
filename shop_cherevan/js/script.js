//___________________________SEARCH EVENT_________________________________
function onSearch(event) {
    event.preventDefault();
    var input = document.getElementById('input');
    input.classList.add("input-on");
    submit.classList.add("submit-on");
    input.focus();
}
function offSearch(event) {
    var input = document.getElementById('input');
    if (event.target == submit || event.target == input) return false;
    input.classList.remove("input-on");
    submit.classList.remove("submit-on");
}
var submit = document.getElementById('submit');
if (submit.addEventListener) {
    submit.addEventListener('click', onSearch);
} else {
    submit.attachEvent('onclick', onSearch);
}
document.onclick = offSearch;
//_________________________________________________________________________

var bbasketCart = JSON.parse(localStorage.getItem("basket"));
if (bbasketCart) {
    document.getElementById('number-of-goods').innerHTML = bbasketCart.itemsBasket.length;
}
else {
    document.getElementById('number-of-goods').innerHTML = 0;
}
if (!localStorage.key("basket")) {
    var basket = {
        "itemsBasket": []
    };
    var basketCart = JSON.stringify(basket);
    localStorage.setItem("basket", basketCart);
}


//_________________________________________________________________________
function Menu(){
    var menu = document.getElementsByClassName('navigation');
  //  var firstItem = menu.item(0);
    console.log(menu[0]);
   if (menu[0].style.display == 'none'){
       menu[0].style.display = 'block';
   }else {
       menu[0].style.display = 'none';
   }
}
var close = document.getElementById('close');
close.addEventListener('click', Menu);
