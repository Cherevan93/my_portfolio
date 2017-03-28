//___________________________CATEGORY-ALL-IMG EVENT________________________
function getItemInfo(event) {
    var target = event.target;
    console.log(target);
    while (target.tagName != 'FIGURE') {
        target = target.parentNode;
    }
    var oneItem = {
        nameOneItem: target.lastElementChild.firstElementChild.innerHTML,
        priseOneItem: target.lastElementChild.lastElementChild.innerHTML,
        priseOneItemTrue: target.lastElementChild.lastElementChild.innerHTML,
        imgOneItem: target.firstElementChild.firstElementChild.src,
        sizeOneItem: '39',
        colorOneItem: 'black',
        numberItem: 1
    };
    localStorage.setItem('oneItem', JSON.stringify(oneItem));
}

var wrapperFig = document.getElementById('wrapperFig');
console.log(wrapperFig);
wrapperFig.addEventListener('click', getItemInfo);

//_________________________________________________________________________
