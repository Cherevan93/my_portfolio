var width = 200;
var count = 1;
var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');
var f = listElems.length;
var position = 0;
carousel.querySelector('.prev').onclick = function() {
    if(f<=9){
        console.log(f);
        f++;

    position = Math.min(position + width * count, 0)
    list.style.marginLeft = position + 'px';}
};
carousel.querySelector('.next').onclick = function() {
    var x = 11 - Math.round((2000-document.documentElement.clientWidth)/200);
    if (f>=x){
        f--;
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
        return;

}};