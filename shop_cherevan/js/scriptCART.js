//_________________________________________________________________________

//_________________________________________________________________________
//-------------построение корзины-----------------------------------------
function createCart() {
    var dataa = JSON.parse(localStorage.getItem("basket"));
    var fullCart = document.getElementById('fullCart');
    var total = 0;

    while (fullCart.childNodes[2]) {
        fullCart.removeChild(fullCart.childNodes[2]);
    }

    for (var i = 0; i <= dataa.itemsBasket.length - 1; i++) {
        dataa.itemsBasket[i].priseOneItem = parseFloat(dataa.itemsBasket[i].priseOneItemTrue) * dataa.itemsBasket[i].numberItem;
        dataa.itemsBasket[i].priseOneItem = dataa.itemsBasket[i].priseOneItem+'$';

        var imgURL = "'" + dataa.itemsBasket[i].imgOneItem + "'";
        var newCartItt = document.createElement('tr');
        newCartItt.className = "firt-td";
        newCartItt.setAttribute('data-id', i);
        newCartItt.innerHTML = '<tr><td><div class="cart-item-img">' +
            '<img src=' + imgURL + '></div></td><td colspan="6"><div class="horizont-p">' +
            '<div class="align-p"><p class="cart-item-text">' + dataa.itemsBasket[i].nameOneItem + '</p><p>Ref.2345/54</p>' +
            '</div><p>' + dataa.itemsBasket[i].colorOneItem + '</p><p>' + dataa.itemsBasket[i].sizeOneItem + '</p><p><input class="number-of-item" type="number" value="'+dataa.itemsBasket[i].numberItem+'" max="100" min="1" style="width: 40px">' +
            '</p><p class="price">' + dataa.itemsBasket[i].priseOneItem + '</p><button class="cart-item-close">X</button></div>';
        fullCart.appendChild(newCartItt);
        total += parseFloat(dataa.itemsBasket[i].priseOneItem);
    }
    document.getElementById("subtotal").innerHTML = total.toFixed(2);
    document.getElementById("number-of-goods").innerHTML = dataa.itemsBasket.length;

}
createCart();
//_________________________________________________________________________
//-------------удаление элемента корзины-----------------------------------
function deleteOneItem(event) {
    var target = event.target;
    if (target.tagName == 'BUTTON') {
        while (target.tagName !== 'TR') {
            target = target.parentNode;
        }

        var dataaa = JSON.parse(localStorage.getItem("basket"));
        dataaa.itemsBasket.splice(target.getAttribute('data-id'), 1);
        localStorage.setItem("basket", JSON.stringify(dataaa));
        var fullCart = document.getElementById('fullCart');
        fullCart.removeChild(target);
        createCart();
    }
}
var fullCart = document.getElementById('fullCart');
fullCart.addEventListener('click', deleteOneItem);

//-------------кол-во одного товара-----------------------------------
function numberItem(event) {
    var target = event.target;
    if (target.tagName == 'INPUT') {

        var value = target.value;
        if (value>100){return}
        while (target.tagName !== 'TR') {
            target = target.parentNode;
        }
        var dataaa = JSON.parse(localStorage.getItem("basket"));
        dataaa.itemsBasket[target.getAttribute('data-id')].numberItem = value;
        localStorage.setItem("basket", JSON.stringify(dataaa));
        createCart();
    }
}
var numberOfItem = document.getElementById('fullCart');
numberOfItem.addEventListener('input', numberItem);