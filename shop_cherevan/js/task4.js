function goodVsEvil(good, evil){
    var arr1 = good.split(' ');
    var arr2 = good.split(' ');
    console.log(arr1);
    console.log(arr2);
    var x= 0,y=0;
    for (var i=0; i<arr1.length; i++){
        x+=arr1[i];
        y+=arr2[i];
    }
    if(x>y){}
}


goodVsEvil('1 1 1 1 1 1','1 1 1 1 1 1');
console.log(yearDays('0 0 0 0 0 10','0 1 1 1 0 0'));
console.log(yearDays('1 0 0 0 0 0','1 0 0 0 0 0'));
