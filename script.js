let num = 266219 ;

var arr = num.toString().split('') ;



   let res = arr.reduce((sum, key) => sum  * key); 
    console.log(res);

let sqr = res ** 3;

    console.log(sqr);

    document.write(sqr.toString().split('').slice(0, 2));
   

