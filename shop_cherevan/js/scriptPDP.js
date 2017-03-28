//_________________________________________________________________________

var nameItem = document.getElementById('nameItem');
var priseItem = document.getElementById('priseItem');
var img = document.getElementById('img');

data = JSON.parse(localStorage.getItem("oneItem"));
nameItem.innerHTML = data.nameOneItem;
priseItem.innerHTML = data.priseOneItem;
img.src = data.imgOneItem;
console.log(localStorage.length);
//_________________________________________________________________________
function addToCart() {
    addButton.style.background = '#008000';
    addButton.innerHTML = 'PRODUCT ADDED';
    basketCart = JSON.parse(localStorage.getItem("basket"));
    basketCart.itemsBasket.push(data);
    localStorage.setItem("basket", JSON.stringify(basketCart));
    document.getElementById('number-of-goods').innerHTML = basketCart.itemsBasket.length;
}
var addButton = document.getElementById('addButton');
console.log(addButton);
addButton.addEventListener('click', addToCart);
//_________________________________________________________________________
function addSize(event) {
    console.log(event.target);
    var target = event.target;
    for (var i = 1; i <= 10; i+=2) {
        target.parentNode.childNodes[i].style.background = '';
    }
    if (target.tagName == 'BUTTON') {
        target.style.background = 'green';
        data.sizeOneItem = target.innerHTML;
    }
}
var size = document.getElementById('size');
console.log(addButton);
size.addEventListener('click', addSize);
//_________________________________________________________________________
function svitchPhoto(event) {
    var target = event.target;
    if (target.tagName == 'IMG') {
        var img = document.getElementById('img');
        var switcher = img.src;
        img.src = target.src;
        target.src = switcher;
        console.log(img.src);
        if(img.src == 'http://localhost:63342/shop/img/green.jpg'){
            data.colorOneItem = 'green';
        }
        if(img.src == 'http://localhost:63342/shop/img/blue.jpg'){
            data.colorOneItem = 'blue';
        }
        if(img.src == 'http://localhost:63342/shop/img/red.jpg'){
            data.colorOneItem = 'red';
        }
    }
}
var wrapIMG = document.getElementById('wrapIMG');
console.log(wrapIMG);
wrapIMG.addEventListener('click', svitchPhoto);